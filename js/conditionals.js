"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

/*function analyzeColor (color) {
    if (color === "blue") {
        console.log("This is the color blue.");
    } else if (color === "green") {
        console.log("This color is green.");
    } else if (color === "red") {
        console.log("This color is called red.");
    } else {
        console.log("No information on this.");
    }
}

analyzeColor("green");*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*analyzeColor(randomColor);
console.log("The color is: " + randomColor);*/

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/*function analyzeColor (color) {
    switch (color) {
        case "blue":
            console.log("Sky is blue.");
            break;
        case "red":
            console.log("Red like Clifford.");
            break;
        case "green":
            console.log("Grass is green.");
            break;
        default:
            console.log("No information.");
            break;
    }
}

analyzeColor(randomColor);
console.log("The color is: " + randomColor);*/

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/*var analyzeColorInput = prompt("What color do you like?");
alert('You picked the color ' + analyzeColorInput);*/
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/*function calculateTotal (luckyNumber, totalPrice) {
    if (luckyNumber === 0) {
        console.log(totalPrice - 0);
    } else if (luckyNumber === 1) {
        console.log(totalPrice - (totalPrice * .1));
    } else if (luckyNumber === 2) {
        console.log(totalPrice - (totalPrice * .25));
    } else if (luckyNumber === 3) {
        console.log(totalPrice - (totalPrice * .35));
    } else if (luckyNumber === 4) {
        console.log(totalPrice - (totalPrice * .5));
    } else if (luckyNumber === 5) {
        console.log("Your purchase is free.");
    }
}*/

// calculateTotal(0, 100) // returns 100
// calculateTotal(4, 100) // returns 50
// calculateTotal(5, 100) // returns 0

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

/*var userTotalBill = prompt("Enter your bill:");
alert("Your lucky number is: " + luckyNumber);
alert("Your price before discount was: " + userTotalBill);
alert("You discounted price is: $" + calculateTotal(luckyNumber, userTotalBill));
// These two are for checking the function above
console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, userTotalBill));*/

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

/*
var userChoice = confirm("Do you want to enter a number?");

if (userChoice) {
    var userNumber = parseInt(prompt("Enter a number:"));

    if (isNaN(userNumber)) {
        alert("This is not a number.");
    }
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
        alert("Your number is Positive.");
    } else {
        alert("Your number is negative.");
    }
}*/
