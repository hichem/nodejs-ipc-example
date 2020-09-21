const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Request

  sock.connect("ipc:///tmp/app.world")
  console.log("Client bound to ipc socket")

  await sock.send("Hello World 6")
  const [result] = await sock.receive()

  console.log(result)
}

run()
