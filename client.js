const net = require('net');

//Establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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
    conn.write("Name: IP")
  });
  return conn;
}

module.exports = {connect};