const zmq = require("zeromq");

// Refer to https://github.com/zeromq/zeromq.js/#clientjs

async function run() {

    // Construct for zmq v5
    sock = zmq.socket("req");
    
    // Construct for zmq v6
    //const sock = new zmq.Request

    // Assign identity  to socket
    sock.identity = "zmq-client-" + process.pid;

    //sock.bind("ipc:///tmp/app.world");

    try {
        sock.connect("ipc:///tmp/app.world");
        console.log("Client bound to ipc socket");

        // Send message
        await sock.send("Hello World");

        // Receive messages asynchronously
        sock.on('message', function(data) {
            console.log('[' + sock.identity + '] ' + 'Received Message: ' + data.toString());
        });

    } catch (err) {
        // Display connection error
        console.log("Connect Error: " + err);

        // Exit
        process.exit(1);
    }
  
}

run();
