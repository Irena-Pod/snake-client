
// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function () {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }

      if (key === '\u0077') {
        connection.write("Move: up");
      }
      if (key === '\u0061') {
        connection.write("Move: left");
      }
      if (key === '\u0073') {
        connection.write("Move: down");
      }
      if (key === '\u0064') {
        connection.write("Move: right");
      }
      //Letter p
      if (key === '\u0070') {
        connection.write("Say: YEEHAW");
      }
      //Letter o
      if (key === '\u006F') {
        connection.write("Say: ME FAST");
      }
    });
  }

  handleUserInput();
  return stdin;
};

setupInput();

module.exports = { setupInput };