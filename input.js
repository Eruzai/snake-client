let connection; // stores the active TCP object

const handleUserInput = function (data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  }
  if (data === 'w') { // moves snake up if w key is pressed
    connection.write("Move: up");
  }
  if (data === 'a') { // moves snake left if a key is pressed
    connection.write("Move: left");
  }
  if (data === 's') { // moves snake down if s key is pressed
    connection.write("Move: down");
  }
  if (data === 'd') { // moves snake right if d key is pressed
    connection.write("Move: right");
  }
  if (data === 'j') {
    connection.write("Say: sssnack");
  }
  if (data === 'k') {
    connection.write("Say: need ssspace");
  }
  if (data === 'l') {
    connection.write("Say: sssad");
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