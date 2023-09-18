const EventEmitter = require("node:events"); // this returns event emitter class

const emitter = new EventEmitter();

emitter.on("bell-ring", () => {
  console.log("door bell ringed !!!!");
});

emitter.on("door-open", (name) => {
  console.log(`door opened by ${name} !!!!`);
});

emitter.emit("bell-ring");
emitter.emit("door-open", "Sajeev");
