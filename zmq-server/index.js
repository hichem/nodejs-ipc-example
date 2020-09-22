const zmq = require("zeromq");

// Refer to https://github.com/zeromq/zeromq.js/#serverjs

async function run() {

    // Construct for zmq v5
     sock = zmq.socket("rep");

    // Construct for zmq v6
    // const sock = new zmq.Reply

    // Assign identity to the server socket
    sock.identity = "zmq-server-" + process.pid;

    // Create the ipc socket / pipe
    sock.bind("ipc:///tmp/app.world");

    // Server socket does not need to connect. Only bind is required
    //sock.connect("ipc:///tmp/app.world");
    //console.log("bound to ipc socket");

    // Receive messages asynchronously
    sock.on('message', function(data) {

        // Display message received from client
        console.log('[' + sock.identity + '] ' + 'Received Message: ' + data.toString());

        // Return same message to client (loopback)
        sock.send(data.toString());
    });
  
}

run();
