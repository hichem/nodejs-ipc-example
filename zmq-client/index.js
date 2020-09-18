const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Request

  sock.connect("ipc://world")
  console.log("Client bound to ipc socket")

  await sock.send("4")
  const [result] = await sock.receive()

  console.log(result)
}

run()
