require("babel-polyfill");
import WebRTC from "simple-datachannel";
import Helper from "./KUtil";
import KResponder from "./KResponder";
import def, { networkFormat } from "./KConst";

export default class Kademlia {
  constructor(_nodeId = null) {
    if (_nodeId !== null) {
      console.log("start kad", _nodeId);
      this.k = 20;
      this.nodeId = _nodeId;
      this.dataList = [];
      this.keyValueList = [];
      this.ref = {};

      this.state = {
        isOffer: false,
        findNode: "",
        hash: {}
      };

      this.callback = {
        onAddPeer: () => {},
        onPeerDisconnect: () => {},
        onCommand: () => {},
        onFindValue: () => {},
        onFindNode: () => {},
        onPingArr: { sample: () => {} }
      };

      this.kbuckets = new Array(160);
      for (let i = 0; i < 160; i++) {
        let kbucket = [];
        this.kbuckets[i] = kbucket;
      }

      this.f = new Helper(this.k, this.kbuckets);
      this.kresponder = new KResponder(this);
    }
  }

  ping(peer) {
    return new Promise((resolve, reject) => {
      console.log("ping", peer.nodeId);

      //10秒以内にpingのフラグが立てば成功
      const timeout = setTimeout(() => {
        console.log("ping fail", peer.nodeId);
        peer.isDisconnected = true;
        this.f.cleanDiscon();
        this.callback.onPeerDisconnect(this.kbuckets);
        reject("ping timeout");
      }, 10 * 1000);

      //ping完了時のコールバック
      this.callback.onPingArr[peer.nodeId] = () => {
        console.log("ping success");
        clearTimeout(timeout);
        resolve(true);
      };

      //自分のノードIDを含める
      const sendData = { target: peer.nodeId };
      //pingを送る
      peer.send(networkFormat(this.nodeId, def.PING, sendData), "kad");
    });
  }

  storeFormat(sender, key, value) {
    const sendData = {
      sender,
      key,
      value
    };
    return networkFormat(this.nodeId, def.STORE, sendData);
  }

  async store(sender, key, value) {
    //自分に一番近いピアを取得
    const peer = this.f.getCloseEstPeer(key);

    console.log(def.STORE, "next", peer.nodeId, "target", key);
    //取得したピアにping
    const result = await this.ping(peer).catch(console.log);

    if (result) {
      //storeを送る
      peer.send(this.storeFormat(sender, key, value), "kad");
      console.log("store done", this.storeFormat(sender, key, value));
    } else {
      console.log("store faile");
    }
  }

  async findNode(targetId, peer) {
    console.log("findnode");
    //接続確認
    const result = await this.ping(peer).catch(console.log);
    if (result) {
      console.log("findnode", targetId);
      this.state.findNode = targetId;
      const sendData = { targetKey: targetId };
      //送る
      peer.send(networkFormat(this.nodeId, def.FINDNODE, sendData), "kad");
    }
  }

  findValue(key, cb = () => {}) {
    this.callback.onFindValue = cb;
    //keyに近いピアを取得
    const peers = this.f.getClosePeers(key);
    for (let peer in peers) {
      //findvalueの実体
      this.doFindvalue(key, peer);
    }
  }

  async doFindvalue(key, peer) {
    const result = await this.ping(peer).catch(console.log);
    if (result) {
      //送る
      peer.send(
        networkFormat(this.nodeId, def.FINDVALUE, {
          targetKey: key
        }),
        "kad"
      );
    }
  }

  addknode(peer) {
    peer.ev.on("data", data => {
      console.log("on data", data);
      this.onCommand(data);
    });

    peer.ev.on("disconnect", () => {
      console.log("kad node disconnected");
      this.f.cleanDiscon();
    });

    if (!this.f.isNodeExist(peer.nodeId)) {
      //自分のノードIDと追加するノードIDの距離
      const num = this.f.distance(this.nodeId, peer.nodeId);
      //kbucketsの該当する距離のkbucketを呼び出す
      const kbucket = this.kbuckets[num];
      //該当するkbucketに新しいピアを加える
      kbucket.push(peer);

      console.log("addknode kbuckets", "peer.nodeId:", peer.nodeId);
      console.log(this.f.getAllPeerIds());

      setTimeout(() => {
        this.findNewPeer(peer);
      }, 1000);

      this.callback.onAddPeer(this.kbuckets);
    }
  }

  findNewPeer(peer) {
    if (this.f.getKbucketNum() < this.k) {
      //自身のノードIDをkeyとしてFIND_NODE
      this.findNode(this.nodeId, peer);
    } else {
      console.log("kbucket ready", this.f.getKbucketNum());
    }
  }

  onRequest(datalink) {
    const network = JSON.parse(datalink);
    this.kresponder.response(network.type, network);
    this.maintain(network);
  }

  async maintain(network) {
    const inx = this.f.distance(this.nodeId, network.nodeId);
    const kbucket = this.kbuckets[inx];

    //送信元が該当するk-bucketの中にあった場合
    //そのノードをk-bucketの末尾に移す
    kbucket.forEach((peer, i) => {
      if (peer.nodeId === network.nodeId) {
        console.log("maintain", "Moves it to the tail of the list");
        kbucket.splice(i, 1);
        kbucket.push(peer);
        return 0;
      }
    });

    //k-bucketがすでに満杯な場合、
    //そのk-bucket中の先頭のノードがオンラインなら先頭のノードを残す
    if (kbucket.length > this.k) {
      console.log("maintain", "bucket fulled", network.nodeId);
      const result = await this.ping(kbucket[0]).catch(console.log);
      if (!result) {
        kbucket.splice(0, 1);
      }
    }
  }

  offer(target, proxy = null) {
    return new Promise((resolve, reject) => {
      const r = this.ref;
      const peer = (r[target] = new WebRTC());
      peer.makeOffer();
      peer.connecting(target);

      const timeout = setTimeout(() => {
        reject("kad offer timeout");
      }, 10 * 1000);

      peer.ev.on("signal", sdp => {
        console.log("kad offer store", target);
        if (this.f.getCloseEstPeer(target).nodeId !== target)
          this.store(this.nodeId, target, { sdp, proxy });
      });

      peer.ev.on("connect", () => {
        console.log("kad offer connected", target);
        this.addknode(peer);
        clearTimeout(timeout);
        resolve(true);
      });
    });
  }

  answer(target, sdp, proxy = null) {
    return new Promise((resolve, reject) => {
      const r = this.ref;
      const peer = (r[target] = new WebRTC());
      peer.makeAnswer(sdp);
      peer.connecting(target);
      console.log("kad answer", target);

      const timeout = setTimeout(() => {
        reject("kad answer timeout");
      }, 10 * 1000);

      peer.ev.on("signal", sdp => {
        this.f
          .getPeerFromnodeId(proxy)
          .send(this.storeFormat(this.nodeId, target, { sdp }), "kad");
      });

      peer.ev.on("connect", () => {
        console.log("kad answer connected", target);
        this.addknode(peer);
        clearTimeout(timeout);
        resolve(true);
      });      
    });
  }

  send(target, data) {
    this.f
      .getPeerFromnodeId(target)
      .send(networkFormat(this.nodeId, def.SEND, data), "kad");
  }

  onCommand(datachannel) {
    const dataLink = datachannel.data;
    const networkLayer = JSON.parse(dataLink);

    if (!JSON.stringify(this.dataList).includes(networkLayer.hash)) {
      this.dataList.push(networkLayer.hash);
      this.f.cleanDiscon();
      this.onRequest(dataLink);
      this.callback.onCommand(networkLayer);
    }
  }
}
