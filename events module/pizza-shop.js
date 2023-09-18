const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size) {
    this.orderNumber++;
    this.emit("order-pizza", size);
  }

  display() {
    console.log(`order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
