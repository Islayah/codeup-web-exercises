"use strict";

// While Loops Notes
/*let incrementor = 1;
while (incrementor < 5) {
    console.log(incrementor++)
}

let incrementor = 0;
while (incrementor > 0) {
    console.log(incrementor--);
}
console.log("The loop has ended.");*/

// TODO: Use a while loop to output the numbers 8-50
// TODO: Output the odd numbers between 8-50
/*let num = 8;
while (num < 50) {
    if (num % 2 === 1) {
        console.log(num);
        num++;
    }
}*/

/*let fullNameEntered = false;
let names = "";
// We don't know how many names they have
while (!fullNameEntered) {
    names += prompt("Please enter your name.");
    fullNameEntered = confirm("Is this your full name?");
}
alert("This is your name: " + names);*/


// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

/*var parkingSpaces = 30;
do {
    console.log("There are " + parkingSpaces + " remaining.");
    parkingSpaces -= 2;
} while (parkingSpaces);
console.log("The parking lot is now full.");*/

// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
/*
var password = "password123";
let isCorrect = false;
let attempt = "";

while (!isCorrect) {
    attempt = prompt("Please enter your password.");
    isCorrect = (attempt === password);
    if (!isCorrect) {
        alert("Try again.");
    }
}
alert("Success.");*/

// Walkthrough code for while loop exercise
/*function loopNums() {
    let num = 1;
    while (num < 65536) {
        num *= 2;
        console.log(num);
    }
}*/

// for loop notes

/*
let num = 8;

for (num; num <= 50; num++) {
    console.log(num);
}*/

/*
for (/!*control variable*!/; /!*test condition*!/; /!*iterator*!/) {
    // code to run for each iteration of the loop
}*/

/*
let letters = "";

for (let i = letters.length; i <= 36; i++) { // stop the loop when the character count is 36
    letters += "z";
    console.log(letters);
}

console.log(letters.length);*/

// For loop for even numbers 0 to 30
/*for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Same as above, just less code
for (let i = 0; i <= 30; i += 2) {
    console.log(i);
}*/

// Mini for loop exercise #2
/*
for (let i = 1; i <= 40; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " marco polo");
    } else if (i % 3 === 0) {
        console.log(i + " marco");
    } else if (i % 5 === 0){
        console.log(i + " polo");
    } else {
        console.log(i + " i'm not playing.");
    }
}*/

// For loop exercise #4
/*function printNumStack () {
    for (let outerNum =  1; outerNum < 10; outerNum++) {
            let numString = outerNum.toString();
        for (let innerNum = 1; innerNum <= outerNum; innerNum++) {
            numString += numString.toString();
        }
        console.log(numString);
    }
}*/

//printNumStack();

// Another solution for #4
// for (var i = 1; i < 10; i++){
//      console.log(i.toString().repeat(i))
//  }

// Solution for #5 on for loops
/*
function numsLessFive () {
    for (let i = 100; i >= 5; i -=5) {
        console.log(i);
    }
}

numsLessFive();*/

// Array Notes
/*
let myNiceArray = ["Cassey", "Ry", "Mark", "Larry"];

for (let i = 0; i < myNiceArray.length; i++) {
    console.log("Hello, " + myNiceArray[i]);
}*/

// Break and Continue Exercise Walkthrough

// Can call a function above the above function
/*
var oddNumer = promptForOddNumberInRange(1, 50)
console.log(oddNumer);

printOddNumbersInRangeWithSkip(low, high, skipNumber) {
    // INCLUSIVE
    for (let i = low; i <= high ; i++) {
        if (i === skipNumber) {
            continue;
        }
        console.log("Here is an odd number: " +i);
    }
}

function promptForOddNumberInRange(low, high) {
    // loop until user gives an odd number in the range
    while(true) {
        var result = prompt("Enter an odd number from " + low " to " + high);
        if (result !== null && result % 2 === 1 && result >= low && result <= high) {
            break;
        }
    }
    return result;
}*/

// findAverage array mini exercise
function findAverage (grades) {
    let sum = 0;
    grades.forEach(function (grade) {
        sum += grade;
    })
    return sum / grades.length;
}

console.log(findAverage([95, 74, 86, 100]));