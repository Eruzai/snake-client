const net = require("net");
const { IP, PORT, NAME, OPTIONS } = require("./constants");

const connect = function() { // establishes a connection with the game server

  // This can be modified to also allow user-input flags from the command line,
  // and make them override constants.js default values.
  // ie. bitFlags |= process.argv[key] || val;
  // Proper sanitization and validation of arg inputs should be done before hand.
  let bitflags = 0;
  for (const [key, val] of Object.entries(OPTIONS)) {
    bitFlags <<= 1;  // Shift bit value left by 1.  
    bitFlags |= val; // Sets the right-most bit to 1 if flag is true, 0 otherwise.
  }
  
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
    options: bitFlags // Server code needs to be updated to handle this.
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + NAME); // tells the server to set our snake's name to our constant
  });

  conn.on("data", (data) => { // prints data to the console if the server sends us any
    console.log(data);
  });

  return conn;
};

module.exports = { connect };
