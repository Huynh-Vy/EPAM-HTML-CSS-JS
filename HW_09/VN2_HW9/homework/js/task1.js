// Your code goes here
let initAmount = Number.parseInt(prompt("Input initial amount of money"));
let numberOfYear = Number.parseInt(prompt("Input number of year"));
let percentageOfAYear = Number.parseInt(prompt("Input percentage of a year"));

let prevProfit = 0;
let prevAmount = initAmount;
let totalAmount = 0;
let totalProfit = 0;

if (initAmount < 1000 || numberOfYear < 1 || percentageOfAYear > 100) {
    alert("Invalid input data");
} 

for (let i = 1; i <= numberOfYear; i++) {
    totalProfit =  prevProfit + prevAmount * percentageOfAYear/100;
    totalAmount = initAmount + totalProfit;
    prevProfit = totalProfit;
    prevAmount = totalAmount;
}

alert("Total Profit: " + totalProfit);
alert("Total Amount: " + totalAmount);

document.querySelector(".initial-amount").innerHTML = initAmount;
document.querySelector(".year-number").innerHTML = numberOfYear;
document.querySelector(".percentage").innerHTML = percentageOfAYear;
document.querySelector(".total-profit").innerHTML = totalProfit;
document.querySelector(".total-amount").innerHTML = totalAmount;
