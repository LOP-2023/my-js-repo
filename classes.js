class Sale {
  customerName = "";
  itemName = "";
  quantity = 0;
  costPrice = 1000;
  tax = 0.18;
  isCredit = false;

  constructor(customerName, itemName, quantity, costPrice, tax, isCredit) {
    this.customerName = customerName;
    this.itemName = itemName;
    this.quantity = quantity;
    this.costPrice = costPrice;
    this.tax = tax;
    this.isCredit = isCredit;
  }
  calculateTotalCost() {
    return this.quantity * this.costPrice * (1 + this.tax);
  }
}
class CreditSale {
  constructor(
    customerName,
    itemName,
    quantity,
    costPrice,
    tax,
    duedate,
    paymentStatus,
    isCredit,
  ) {
    this.customerName = customerName;
    this.itemName = itemName;
    this.quantity = quantity;
    this.costPrice = costPrice;
    this.tax = tax;
    this.duedate = duedate;
    this.paymentStatus = paymentStatus;
    this.iscredit = isCredit;
  }
  getDaysDue() {
    let today = new Date();
    let dueDate = new Date(this.duedate);
    let diffInTime = dueDate.getTime() - today.getTime();
    let diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays;
  }
}

let sale = new Sale("ivan", "nails", 10, 350000, 0.18, false);
let sale_1 = new Sale("peter", "cement", 10, 300000, 0.16, false);
let creditSale = new CreditSale(
  "martin",
  "cement",
  23,
  340000,
  0.12,
  "2026-04-10",
  "pending",
  true,
);
console.log(sale);
console.log(sale_1);
console.log(sale.calculateTotalCost());
console.log(creditSale);
console.log("Days until due:", creditSale.getDaysDue());

// console.log(Sale)
// console.log(Sale.customerName, sale.costPrice)
// console.log(sale_1.customerName, sale_1.costPrice)

class NGHStock {
  nameOfItem = "";
  quantityInUnits = "";
  supplierName = "";

  constructor(nameOfItem, quantityInUnits, supplierName) {
    this.nameOfItem = nameOfItem;
    this.quantityInUnits = quantityInUnits;
    this.supplierName = supplierName;
  }
  validateTonnage() {
    return this.quantityInUnits > 500;
  }
}
let nghStock = new NGHStock("timber", 800, "james");
let highStock = new NGHStock("paint", 600, "jerry");
console.log(nghStock);
console.log(highStock.validateTonnage());
