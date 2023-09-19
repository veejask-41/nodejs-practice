const buffer = new Buffer.from("SajeEv"); // store data in chunks // can pass char encoding as 2nd argument, default is utf-8

console.log(buffer.toString()); // return string
console.log(buffer); // buffer odbject with hex char codes
console.log(buffer.toJSON()); // json object format with decimal char codes


buffer.write("abi") // buffers have limited memory, write will overwrite previous value
console.log(buffer.toString());

buffer.write("abineyan")
console.log(buffer.toString());