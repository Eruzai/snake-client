const handleUserInput = function (data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  }
};

const setupInput = function () { // setup interface to handle user input from stdin
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