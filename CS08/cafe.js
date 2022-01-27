const { Cashier, Mannager, Barista } = require("./cafe-worker");
const OrderQueue = require("./orderQueue.js");

const order = new OrderQueue();
const cashier = new Cashier();
const mannager = new Mannager();
const barista = new Barista();

cashier.getInput(order.managerQue);
mannager.checkSchdule(order.managerQue, order.baristarQue);
barista.makingCoffe(order.baristarQue);
