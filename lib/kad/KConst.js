"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.networkFormat = networkFormat;
exports.default = void 0;

var _sha = _interopRequireDefault(require("sha1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  STORE: "STORE",
  FINDNODE: "FINDNODE",
  FINDNODE_R: "FINDNODE_R",
  FINDVALUE: "FINDVALUE",
  FINDVALUE_R: "FINDVALUE_R",
  PING: "PING",
  PONG: "PONG",
  ONCOMMAND: "ONCOMMAND",
  ADD_KNODE: "ADD_KNODE",
  DISCONNECT_KNODE: "DISCONNECT_KNODE",
  BROADCAST: "BROADCAST",
  SEND: "SEND"
};
exports.default = _default;

function networkFormat(nodeId, type, data) {
  var packet = {
    layer: "networkLayer",
    type: type,
    nodeId: nodeId,
    data: data,
    date: Date.now(),
    hash: ""
  };
  packet.hash = (0, _sha.default)(JSON.stringify(packet)).toString();
  return JSON.stringify(packet);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9rYWQvS0NvbnN0LnRzIl0sIm5hbWVzIjpbIlNUT1JFIiwiRklORE5PREUiLCJGSU5ETk9ERV9SIiwiRklORFZBTFVFIiwiRklORFZBTFVFX1IiLCJQSU5HIiwiUE9ORyIsIk9OQ09NTUFORCIsIkFERF9LTk9ERSIsIkRJU0NPTk5FQ1RfS05PREUiLCJCUk9BRENBU1QiLCJTRU5EIiwibmV0d29ya0Zvcm1hdCIsIm5vZGVJZCIsInR5cGUiLCJkYXRhIiwicGFja2V0IiwibGF5ZXIiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsImhhc2giLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7ZUFFZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsT0FETTtBQUViQyxFQUFBQSxRQUFRLEVBQUUsVUFGRztBQUdiQyxFQUFBQSxVQUFVLEVBQUUsWUFIQztBQUliQyxFQUFBQSxTQUFTLEVBQUUsV0FKRTtBQUtiQyxFQUFBQSxXQUFXLEVBQUUsYUFMQTtBQU1iQyxFQUFBQSxJQUFJLEVBQUUsTUFOTztBQU9iQyxFQUFBQSxJQUFJLEVBQUUsTUFQTztBQVFiQyxFQUFBQSxTQUFTLEVBQUUsV0FSRTtBQVNiQyxFQUFBQSxTQUFTLEVBQUUsV0FURTtBQVViQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFWTDtBQVdiQyxFQUFBQSxTQUFTLEVBQUUsV0FYRTtBQVliQyxFQUFBQSxJQUFJLEVBQUU7QUFaTyxDOzs7QUFlUixTQUFTQyxhQUFULENBQXVCQyxNQUF2QixFQUF1Q0MsSUFBdkMsRUFBcURDLElBQXJELEVBQWdFO0FBQ3JFLE1BQUlDLE1BQU0sR0FBRztBQUNYQyxJQUFBQSxLQUFLLEVBQUUsY0FESTtBQUVYSCxJQUFBQSxJQUFJLEVBQUVBLElBRks7QUFHWEQsSUFBQUEsTUFBTSxFQUFFQSxNQUhHO0FBSVhFLElBQUFBLElBQUksRUFBRUEsSUFKSztBQUtYRyxJQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxFQUxLO0FBTVhDLElBQUFBLElBQUksRUFBRTtBQU5LLEdBQWI7QUFRQUwsRUFBQUEsTUFBTSxDQUFDSyxJQUFQLEdBQWMsa0JBQUtDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxNQUFmLENBQUwsRUFBNkJRLFFBQTdCLEVBQWQ7QUFDQSxTQUFPRixJQUFJLENBQUNDLFNBQUwsQ0FBZVAsTUFBZixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hhMSBmcm9tIFwic2hhMVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNUT1JFOiBcIlNUT1JFXCIsXG4gIEZJTkROT0RFOiBcIkZJTkROT0RFXCIsXG4gIEZJTkROT0RFX1I6IFwiRklORE5PREVfUlwiLFxuICBGSU5EVkFMVUU6IFwiRklORFZBTFVFXCIsXG4gIEZJTkRWQUxVRV9SOiBcIkZJTkRWQUxVRV9SXCIsXG4gIFBJTkc6IFwiUElOR1wiLFxuICBQT05HOiBcIlBPTkdcIixcbiAgT05DT01NQU5EOiBcIk9OQ09NTUFORFwiLFxuICBBRERfS05PREU6IFwiQUREX0tOT0RFXCIsXG4gIERJU0NPTk5FQ1RfS05PREU6IFwiRElTQ09OTkVDVF9LTk9ERVwiLFxuICBCUk9BRENBU1Q6IFwiQlJPQURDQVNUXCIsXG4gIFNFTkQ6IFwiU0VORFwiXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbmV0d29ya0Zvcm1hdChub2RlSWQ6IHN0cmluZywgdHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgbGV0IHBhY2tldCA9IHtcbiAgICBsYXllcjogXCJuZXR3b3JrTGF5ZXJcIixcbiAgICB0eXBlOiB0eXBlLFxuICAgIG5vZGVJZDogbm9kZUlkLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgZGF0ZTogRGF0ZS5ub3coKSxcbiAgICBoYXNoOiBcIlwiXG4gIH07XG4gIHBhY2tldC5oYXNoID0gc2hhMShKU09OLnN0cmluZ2lmeShwYWNrZXQpKS50b1N0cmluZygpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocGFja2V0KTtcbn1cbiJdfQ==