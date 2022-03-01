"use strict";

//Part 1 of conditionals.js
/*
function analyzeColor(color) {
    if (color === 'red') {
        return "Strawberries are red.";
    } else if (color === 'blue') {
        return "Blue is the color of the sky.";
    } else {
        return "I don't know anything about " + color;
    }
}

console.log(analyzeColor('green'));

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(randomColor);
console.log(analyzeColor(randomColor));*/

/*
function analyzeColor (color) {
    switch (color) {
        case 'red':
            return "Strawberries are red.";
            break;
        case 'blue':
            return "The sky is blue.";
            break;
        default:
            return "IDK about " + color;
            break;
    }
}

console.log(analyzeColor('red'));

var userColor = prompt("Pick a color.");
alert(analyzeColor(userColor));*/
///////////////////////////////////////////////////////////////

/*function calculateTotal(luckyNumber, totalAmount) {
    var discountPercentage;
    if (luckyNumber === 0) {
        discountPercentage = 0.00;
    } else if (luckyNumber === 1) {
        discountPercentage = 0.10;
    } else if (luckyNumber === 2) {
        discountPercentage = 0.25;
    } else if (luckyNumber === 3) {
        discountPercentage = 0.35;
    } else if (luckyNumber === 4) {
        discountPercentage= 0.50;
        {
        }
}

    var discount = totalAmount * discountPercentage;
    return totalAmount - discount;*/
// Generate a random number between 0 and 6
/*var luckyNumber = Math.floor(Math.random() * 6);
var userTotalBill = prompt("Enter your bill:");
alert("Your lucky number is: ", + luckyNumber);
alert("Your price before discount was: " + userTotalBill);
alert("You discounted price is: $" + calculateTotal(luckyNumber, userTotalBill));*/
// These two are for checking the function above
/*
console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 100));*/
///////////////////////////////////////////////////////////////

/*var userChoice = confirm("Do you want to enter a number?");

if (userChoice) {
    var userNumber = parseInt(prompt("Enter a number:"));

    if (isNaN(userNumber)) {
        alert("This is not a number.");
    } else {
    // Determine if the number is even or odd.
    if (userNumber % 2 === 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is odd.");
    }
    // Number + 100
    alert("Your number plus 100 is: " + (userNumber + 100));
    // Positive or negative.
    if (userNumber > 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is negative.");
    }
    } else {
    alert("Error.");
    }
}*/

// While Loops Notes
let incrementor = 1;
while (incrementor < 5) {
    console.log(incrementor++)
}

let incrementor = 0;
while (incrementor > 0) {
    console.log(incrementor--);
}
console.log("The loop has ended.");

// Objects Class Walkthrough
// 1st Problem
let person = {}