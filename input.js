const { clearInterval } = require("timers");
const { MOVEMENT, MESSAGES } = require("./constants");

let connection; // stores the active TCP object
let interval = undefined; // stores continous movement interval ID

const handleUserInput = function(data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  }
  if (MOVEMENT.hasOwnProperty(data)) { // checks object for key pressed to determine if keybind was pressed
    clearInterval(interval); // clears our interval for continuous movement
    interval = setInterval(() => { // creates an interval for continous movement in the direction specified by keybind pressed
      connection.write("Move: " + MOVEMENT[data]); // tells the server in which direction to move our snake
    }, 100);
  }
  if (MESSAGES.hasOwnProperty(data)) { // checks object for key pressed to determine if keybind was pressed
    connection.write("Say: " + MESSAGES[data]); // sends message for server to display corresponding to our keybind
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

module.exports = { setupInput };