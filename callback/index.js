function greet1(name) {
  console.log(`Hi! ${name}`);
}

function greet2(name) {
  console.log(`Helloo! ${name}`);
}

// a function passing as an argument to another function is a callback function
// a function calling another function is a higher order funstion
function greetSajeev(greetFn) {
  const name = "Sajeev";
  greetFn(name);
}

greetSajeev(greet1);
greetSajeev(greet2);
