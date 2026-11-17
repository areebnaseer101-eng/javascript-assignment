let temperatures = [32, 35, 30, 34, 36, 31, 33];

let total = 0;

for (let i = 0; i < temperatures.length; i++) {
    console.log(temperatures[i]);
    total = total + temperatures[i];
}

let average = total / temperatures.length;

let aboveAverage = 0;

for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > average) {
        aboveAverage++;
    }
}

console.log("Average Temperature:", average);
console.log("Days Above Average:", aboveAverage);

let marks = [75, 88, 45, 90, 67, 55, 82, 40];

console.log("Original Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log("Reverse Marks:");

for (let i = marks.length - 1; i >= 0; i--) {
    console.log(marks[i]);
}

let highest = marks[0];
let lowest = marks[0];
let passed = 0;

for (let i = 0; i < marks.length; i++) {

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] < lowest) {
        lowest = marks[i];
    }

    if (marks[i] >= 50) {
        passed++;
    }
}

console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Students Passed:", passed);

let sales = [
    [12000, 15000, 11000, 14000],
    [10000, 18000, 16000, 13000],
    [17000, 14000, 19000, 16000]
];

let branchTotals = [];
let grandTotal = 0;

for (let i = 0; i < sales.length; i++) {

    let total = 0;

    console.log("Branch", i + 1);

    for (let j = 0; j < sales[i].length; j++) {
        console.log("Day", j + 1, ":", sales[i][j]);

        total = total + sales[i][j];
    }

    branchTotals.push(total);
    grandTotal = grandTotal + total;

    console.log("Branch Total:", total);
}

let highestSales = branchTotals[0];
let highestBranch = 1;

for (let i = 0; i < branchTotals.length; i++) {

    if (branchTotals[i] > highestSales) {
        highestSales = branchTotals[i];
        highestBranch = i + 1;
    }
}

console.log("Total Sales:", grandTotal);
console.log("Highest Sales Branch:", highestBranch);
console.log("Highest Branch Total:", highestSales);

let stops2 = [2, 4, 6, 8, 10, 12];

console.log("Original Route:");

for (let i = 0; i < stops.length; i++) {
    console.log(stops[i]);
}

let revenue2 = [];

for (let i = stops.length - 1; i >= 0; i--) {
    reversedRoute.push(stops[i]);
}

console.log("Reversed Route:");

for (let i = 0; i < reversedRoute.length; i++) {
    console.log(reversedRoute[i]);
}

let stops3 = [2, 4, 6, 8, 10, 12];

console.log("Original Route:");

for (let i = 0; i < stops.length; i++) {
    console.log(stops[i]);
}

let revenue3= [];

for (let i = stops.length - 1; i >= 0; i--) {
    reversedRoute.push(stops[i]);
}

console.log("Reversed Route:");

for (let i = 0; i < reversedRoute.length; i++) {
    console.log(reversedRoute[i]);
}

let code = prompt("Enter Product Code:");

let originalCode = code;

code = code.toLowerCase();

let reversedCode = "";

for (let i = code.length - 1; i >= 0; i--) {
    reversedCode = reversedCode + code[i];
}

console.log("Entered Code:", originalCode);

if (code === reversedCode) {
    console.log("This is a Palindrome Code");
} else {
    console.log("This is Not a Palindrome Code");
}

function calculatePrice(price, discount) {

    let discountAmount = (price * discount) / 100;

    let finalPrice = price - discountAmount;

    return finalPrice;
}

let price = 5000;
let discount = 20;

let result2 = calculatePrice(price, discount);

console.log("Original Price:", price);
console.log("Discount:", discount + "%");
console.log("Final Price:", result);

function calculateBill(price, quantity) {

    let total = price * quantity;

    return total;
}

let itemPrice = 250;
let quantity = 4;

let bill = calculateBill(itemPrice, quantity);

console.log("Item Price:", itemPrice);
console.log("Quantity:", quantity);
console.log("Total Bill:", bill);

function checkGrade(marks) {

    if (marks >= 85 && marks <= 100) {
        return "A";
    }
    else if (marks >= 70 && marks < 85) {
        return "B";
    }
    else if (marks >= 50 && marks < 70) {
        return "C";
    }
    else if (marks < 50 && marks >= 0) {
        return "Fail";
    }
    else {
        return "Invalid Marks";
    }
}

let studentMarks = 78;

let grade = checkGrade(studentMarks);

console.log("Student Marks:", studentMarks);
console.log("Student Grade:", grade);

function calculateDelivery(amount, distance) {

    let charge = 0;

    if (amount >= 2000 && distance <= 5) {
        charge = 0;
    }
    else {
        charge = 100;

        if (distance > 5) {
            charge = charge + (distance - 5) * 20;
        }
    }

    return charge;
}

let orderAmount = 1500;
let deliveryDistance = 8;

let deliveryCharge = calculateDelivery(orderAmount, deliveryDistance);

let totalBill = orderAmount + deliveryCharge;

console.log("Order Amount:", orderAmount);
console.log("Delivery Distance:", deliveryDistance);
console.log("Delivery Charge:", deliveryCharge);
console.log("Total Bill:", totalBill);

function calculateSales(sales) {

    let total = 0;
    let targetDays = 0;

    for (let i = 0; i < sales.length; i++) {

        total = total + sales[i];

        if (sales[i] >= 10000) {
            targetDays++;
        }
    }

    let average = total / 7;

    return {
        totalSales: total,
        averageSales: average,
        targetDays: targetDays
    };
}

let weeklySales = [12000, 8000, 15000, 9000, 11000, 13000, 10000];

let weeklyResult= calculateSales(weeklySales);

console.log("Total Weekly Sales:", result.totalSales);
console.log("Average Daily Sales:", result.averageSales);
console.log("Days Reached Target:", result.targetDays);

if (result.averageSales >= 10000) {
    console.log("Weekly Target Achieved");
}
else {
    console.log("Weekly Target Not Achieved");
}