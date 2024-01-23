const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() { // establishes a connection with the game server
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.setEncoding("utf8"); // interpret incoming data as text

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: KEV"); // tells the server to set our snake's name as KEV
  });

  conn.on("data", (data) => { // prints data to the console if the server sends us any
    console.log(data);
  });

  return conn;
};

module.exports = { connect };