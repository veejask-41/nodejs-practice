const PizzaShop = require("./pizza-shop.js");

const pizzaShop = new PizzaShop();

pizzaShop.on("order-pizza", (size) =>{
    console.log(`${size} sized pizza ordered!!`);
})

pizzaShop.order("large");
pizzaShop.display();
