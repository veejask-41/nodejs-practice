const superHero = require("./super-hero.js");
const SuperHero = require("./super-hero.js");
console.log(SuperHero.name);
superHero.setName("sajeev")
console.log(superHero.name);

const superHero2 = require("./super-hero.js") // it'll re-import the cached instance
// to tackle this, export and import class instead of instance of the class
console.log(superHero2.name);