const zmq = require("zeromq");

async function run() {
  sock = zmq.socket("req");

  //sock.bind("ipc:///tmp/app.world");

  sock.connect("ipc:///tmp/app.world");
  console.log("Client bound to ipc socket");

  // Send message
  await sock.send("Hello World 6");

  // Receive messages asynchronously
  sock.on('message', function(data) {
    console.log('Received Message:', data.toString());
  });
  
}

run();
