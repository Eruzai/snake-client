const handleUserInput = function (data) {
  if (data === '\u0003') { // terminates process if ctr + C is pressed
    process.exit();
  }
  if (data === 'w') { // moves snake n if x key is pressed
    console.log("Move: up");
  }
  if (data === 'a') { // moves snake n if x key is pressed
    console.log("Move: left");
  }
  if (data === 's') { // moves snake n if x key is pressed
    console.log("Move: down");
  }
  if (data === 'd') { // moves snake n if x key is pressed
    console.log("Move: right");
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