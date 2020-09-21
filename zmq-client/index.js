const zmq = require("zeromq");

async function run() {
  sock = zmq.socket("req");

  //sock.bind("ipc:///tmp/app.world");

  sock.connect("ipc:///tmp/app.world");
  console.log("Client bound to ipc socket");

  sock.on('message', function(reply) {
    console.log('Received Message:', reply.toString());
  });
  
}

run();
