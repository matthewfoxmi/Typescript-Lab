"use strict";
exports.__esModule = true;
var mountains = [
    { Name: "Kilimanjaro", Height: 19341 },
    { Name: "Everest", Height: 29029 },
    { Name: "Denali", Height: 20310 }
];
function findNameOfTallestMountain(mountain) {
    var maxValue = 0;
    var tallestName = "";
    mountain.forEach(function (m) {
        // maxValue = Math.max(m.Height);
        if (m.Height > maxValue) {
            maxValue = m.Height;
            // tallestName = m.Name.valueOf[maxValue];
        }
    });
    return tallestName;
}
var mountainName = (findNameOfTallestMountain(mountains));
console.log(mountainName);
var products = [
    { Name: "Pixel 5a", Price: 400 },
    { Name: "Reverend Sensei", Price: 900 },
    { Name: "Deering Goodtime", Price: 800 }
];
function calcAverageProductPrice(products) {
    var sum = 0;
    var avg = 0;
    products.forEach(function (p) {
        sum += p.Price;
    });
    avg = sum / products.length;
    return avg;
}
var avgPrices = calcAverageProductPrice(products);
console.log(avgPrices);
var items = [
    { Product: { Name: "motor", Price: 10.00 }, Quantity: 10 },
    { Product: { Name: "sensor", Price: 12.50 }, Quantity: 4 },
    { Product: { Name: "LED", Price: 1.00 }, Quantity: 20 }
];
function calcInventoryValue(items) {
    var total = 0;
    var grandTotal = 0;
    items.forEach(function (i) {
        total = i.Quantity * i.Product.Price;
        //    grandTotal = total += i.Quantity * items.length;
        grandTotal += i.Quantity * i.Product.Price;
    });
    return grandTotal;
}
var total = calcInventoryValue(items);
console.log(total);
