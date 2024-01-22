const { /*MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY,*/MOVEMENT, MESSAGES } = require("./constants");
let connection; // stores the active TCP object

const handleUserInput = function (data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  };
  if (MOVEMENT.hasOwnProperty(data)) {
    connection.write("Move: " + MOVEMENT[data]);
  };
  if (MESSAGES.hasOwnProperty(data)) {
    connection.write("Say: " + MESSAGES[data]);
  };
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