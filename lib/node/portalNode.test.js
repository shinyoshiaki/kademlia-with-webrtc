"use strict";

require("source-map-support/register");

var _portalNode = _interopRequireDefault(require("./portalNode"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3BvcnRhbE5vZGUudGVzdC50cyJdLCJuYW1lcyI6WyJxdWVzTXlQb3J0IiwidHlwZSIsIm5hbWUiLCJtZXNzYWdlIiwicXVlc0FkZHJlc3MiLCJxdWVzUG9ydCIsImlucXVpcmUiLCJwcm9tcHQiLCJ0aGVuIiwiYW5zd2VyIiwiY29uc29sZSIsImxvZyIsIm15UG9ydCIsImFkZHJlc3MiLCJwb3J0IiwiUG9ydGFsTm9kZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsSUFBSSxFQUFFLE9BRFc7QUFFakJDLEVBQUFBLElBQUksRUFBRSxRQUZXO0FBR2pCQyxFQUFBQSxPQUFPLEVBQUU7QUFIUSxDQUFuQjtBQUtBLElBQU1DLFdBQVcsR0FBRztBQUNsQkgsRUFBQUEsSUFBSSxFQUFFLE9BRFk7QUFFbEJDLEVBQUFBLElBQUksRUFBRSxTQUZZO0FBR2xCQyxFQUFBQSxPQUFPLEVBQUU7QUFIUyxDQUFwQjtBQUtBLElBQU1FLFFBQVEsR0FBRztBQUNmSixFQUFBQSxJQUFJLEVBQUUsT0FEUztBQUVmQyxFQUFBQSxJQUFJLEVBQUUsTUFGUztBQUdmQyxFQUFBQSxPQUFPLEVBQUU7QUFITSxDQUFqQjs7QUFLQUcsa0JBQVFDLE1BQVIsQ0FBZSxDQUFDUCxVQUFELEVBQWFJLFdBQWIsRUFBMEJDLFFBQTFCLENBQWYsRUFBb0RHLElBQXBELENBQXlELFVBQUNDLE1BQUQsRUFBaUI7QUFDeEVDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JGLE1BQU0sQ0FBQ0csTUFBM0IsY0FBcUNILE1BQU0sQ0FBQ0ksT0FBNUMsY0FBdURKLE1BQU0sQ0FBQ0ssSUFBOUQ7QUFDQSxNQUFJQyxtQkFBSixDQUFlTixNQUFNLENBQUNHLE1BQXRCLEVBQThCO0FBQUVDLElBQUFBLE9BQU8sRUFBRUosTUFBTSxDQUFDSSxPQUFsQjtBQUEyQkMsSUFBQUEsSUFBSSxFQUFFTCxNQUFNLENBQUNLO0FBQXhDLEdBQTlCO0FBQ0QsQ0FIRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xuaW1wb3J0IFBvcnRhbE5vZGUgZnJvbSBcIi4vcG9ydGFsTm9kZVwiO1xuaW1wb3J0IGlucXVpcmUgZnJvbSBcImlucXVpcmVyXCI7XG5cbmNvbnN0IHF1ZXNNeVBvcnQgPSB7XG4gIHR5cGU6IFwiaW5wdXRcIixcbiAgbmFtZTogXCJteVBvcnRcIixcbiAgbWVzc2FnZTogXCJteSBwb3J0XCJcbn07XG5jb25zdCBxdWVzQWRkcmVzcyA9IHtcbiAgdHlwZTogXCJpbnB1dFwiLFxuICBuYW1lOiBcImFkZHJlc3NcIixcbiAgbWVzc2FnZTogXCJ0YXJnZXQgYWRkcmVzc1wiXG59O1xuY29uc3QgcXVlc1BvcnQgPSB7XG4gIHR5cGU6IFwiaW5wdXRcIixcbiAgbmFtZTogXCJwb3J0XCIsXG4gIG1lc3NhZ2U6IFwidGFyZ2V0IHBvcnRcIlxufTtcbmlucXVpcmUucHJvbXB0KFtxdWVzTXlQb3J0LCBxdWVzQWRkcmVzcywgcXVlc1BvcnRdKS50aGVuKChhbnN3ZXI6IGFueSkgPT4ge1xuICBjb25zb2xlLmxvZyhgdGVzdDoke2Fuc3dlci5teVBvcnR9OiR7YW5zd2VyLmFkZHJlc3N9OiR7YW5zd2VyLnBvcnR9YCk7XG4gIG5ldyBQb3J0YWxOb2RlKGFuc3dlci5teVBvcnQsIHsgYWRkcmVzczogYW5zd2VyLmFkZHJlc3MsIHBvcnQ6IGFuc3dlci5wb3J0IH0pO1xufSk7XG4iXX0=