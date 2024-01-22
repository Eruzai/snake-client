const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES } = require("./constants");
let connection; // stores the active TCP object

const handleUserInput = function (data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  }
  if (data === MOVE_UP_KEY) { // moves snake up if w key is pressed
    connection.write("Move: up");
  }
  if (data === MOVE_LEFT_KEY) { // moves snake left if a key is pressed
    connection.write("Move: left");
  }
  if (data === MOVE_DOWN_KEY) { // moves snake down if s key is pressed
    connection.write("Move: down");
  }
  if (data === MOVE_RIGHT_KEY) { // moves snake right if d key is pressed
    connection.write("Move: right");
  }
  if (MESSAGES.hasOwnProperty(data)) {
    connection.write("Say: " + MESSAGES[data]);
  }
};

const setupInput = (conn) => { // setup interface to handle user input from stdin
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // accepts keyboard input
  return stdin;
};

module.exports = {
  setupInput
};