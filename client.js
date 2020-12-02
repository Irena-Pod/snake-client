const net = require('net');
const { IP, PORT } = require('./constants');

//Establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  //Event handler to handle incoming data
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //Event handler to handle our connection
  conn.on('connect', () => {
    console.log('Connection has been established successfully');
    conn.write("Name: IP");
    // hard coded move up command - testing
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);

    
  });

 

  return conn;
}

module.exports = { connect };

