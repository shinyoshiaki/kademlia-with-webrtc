"use strict";

require("source-map-support/register");

var _portalNode = _interopRequireDefault(require("../node/portalNode"));

var _inquirer = _interopRequireDefault(require("inquirer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quesMyPort = {
  type: "input",
  name: "myPort",
  message: "my port"
};
var quesAddress = {
  type: "input",
  name: "address",
  message: "target address"
};
var quesPort = {
  type: "input",
  name: "port",
  message: "target port"
};

_inquirer.default.prompt([quesMyPort, quesAddress, quesPort]).then(function (answer) {
  console.log("test:".concat(answer.myPort, ":").concat(answer.address, ":").concat(answer.port));
  new _portalNode.default(answer.myPort, {
    address: answer.address,
    port: answer.port
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGkvcG9ydGFsTm9kZS50ZXN0LnRzIl0sIm5hbWVzIjpbInF1ZXNNeVBvcnQiLCJ0eXBlIiwibmFtZSIsIm1lc3NhZ2UiLCJxdWVzQWRkcmVzcyIsInF1ZXNQb3J0IiwiaW5xdWlyZSIsInByb21wdCIsInRoZW4iLCJhbnN3ZXIiLCJjb25zb2xlIiwibG9nIiwibXlQb3J0IiwiYWRkcmVzcyIsInBvcnQiLCJQb3J0YWxOb2RlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxJQUFJLEVBQUUsT0FEVztBQUVqQkMsRUFBQUEsSUFBSSxFQUFFLFFBRlc7QUFHakJDLEVBQUFBLE9BQU8sRUFBRTtBQUhRLENBQW5CO0FBS0EsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCSCxFQUFBQSxJQUFJLEVBQUUsT0FEWTtBQUVsQkMsRUFBQUEsSUFBSSxFQUFFLFNBRlk7QUFHbEJDLEVBQUFBLE9BQU8sRUFBRTtBQUhTLENBQXBCO0FBS0EsSUFBTUUsUUFBUSxHQUFHO0FBQ2ZKLEVBQUFBLElBQUksRUFBRSxPQURTO0FBRWZDLEVBQUFBLElBQUksRUFBRSxNQUZTO0FBR2ZDLEVBQUFBLE9BQU8sRUFBRTtBQUhNLENBQWpCOztBQUtBRyxrQkFBUUMsTUFBUixDQUFlLENBQUNQLFVBQUQsRUFBYUksV0FBYixFQUEwQkMsUUFBMUIsQ0FBZixFQUFvREcsSUFBcEQsQ0FBeUQsVUFBQ0MsTUFBRCxFQUFpQjtBQUN4RUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkYsTUFBTSxDQUFDRyxNQUEzQixjQUFxQ0gsTUFBTSxDQUFDSSxPQUE1QyxjQUF1REosTUFBTSxDQUFDSyxJQUE5RDtBQUNBLE1BQUlDLG1CQUFKLENBQWVOLE1BQU0sQ0FBQ0csTUFBdEIsRUFBOEI7QUFBRUMsSUFBQUEsT0FBTyxFQUFFSixNQUFNLENBQUNJLE9BQWxCO0FBQTJCQyxJQUFBQSxJQUFJLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBeEMsR0FBOUI7QUFDRCxDQUhEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI7XG5pbXBvcnQgUG9ydGFsTm9kZSBmcm9tIFwiLi4vbm9kZS9wb3J0YWxOb2RlXCI7XG5pbXBvcnQgaW5xdWlyZSBmcm9tIFwiaW5xdWlyZXJcIjtcblxuY29uc3QgcXVlc015UG9ydCA9IHtcbiAgdHlwZTogXCJpbnB1dFwiLFxuICBuYW1lOiBcIm15UG9ydFwiLFxuICBtZXNzYWdlOiBcIm15IHBvcnRcIlxufTtcbmNvbnN0IHF1ZXNBZGRyZXNzID0ge1xuICB0eXBlOiBcImlucHV0XCIsXG4gIG5hbWU6IFwiYWRkcmVzc1wiLFxuICBtZXNzYWdlOiBcInRhcmdldCBhZGRyZXNzXCJcbn07XG5jb25zdCBxdWVzUG9ydCA9IHtcbiAgdHlwZTogXCJpbnB1dFwiLFxuICBuYW1lOiBcInBvcnRcIixcbiAgbWVzc2FnZTogXCJ0YXJnZXQgcG9ydFwiXG59O1xuaW5xdWlyZS5wcm9tcHQoW3F1ZXNNeVBvcnQsIHF1ZXNBZGRyZXNzLCBxdWVzUG9ydF0pLnRoZW4oKGFuc3dlcjogYW55KSA9PiB7XG4gIGNvbnNvbGUubG9nKGB0ZXN0OiR7YW5zd2VyLm15UG9ydH06JHthbnN3ZXIuYWRkcmVzc306JHthbnN3ZXIucG9ydH1gKTtcbiAgbmV3IFBvcnRhbE5vZGUoYW5zd2VyLm15UG9ydCwgeyBhZGRyZXNzOiBhbnN3ZXIuYWRkcmVzcywgcG9ydDogYW5zd2VyLnBvcnQgfSk7XG59KTtcbiJdfQ==