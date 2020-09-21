const zmq = require("zeromq");

async function run() {
  sock = zmq.socket("rep");

  sock.identity = "zmq-server" + process.id;
  sock.bind("ipc:///tmp/app.world");

  //sock.connect("ipc:///tmp/app.world");
  //console.log("Client bound to ipc socket");

  // Send message
  //await sock.send("Hello World 6");

  // Receive messages asynchronously
  sock.on('message', function(data) {
    console.log('[' + sock.identity + '] ' + 'Received Message: ' + data.toString());

    sock.send(data.toString());
  });
  
}

run();
