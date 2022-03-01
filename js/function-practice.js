"use strict";

//My code
/*var userName = prompt("Enter your name: ");

function getName() {
    return userName;
    console.log("Your name is: " + userName);
}function-practice.js*/

//Teacher code
/*function getName() {
    return prompt("What is your name?");
}

console.log(getName());

//Teacher code for part 2
function showName(username) {
    alert(username);
}*/

//Alt version of part 2
/*function getName() {
    let addMoreNames = true;
    let username = "";
    while (addMoreNames) {
        username += prompt("What is your name?")
        addMoreNames = confirm("Would you like to add another name?");
        if (addMoreNames) {
            username += " "
        }
    }
    return username;
}

console.log(getName());*/

// Make a function named isLowerCase(letter) which returns true if the parameter is lowercased; otherwise it returns false
// Write a function named double(n) that returns a number times two
// Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type; otherwise it returns false

/*function isLowerCase(letter) {
    if (letter === letter.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

console.log(isLowerCase());*/

//1st problem in function exercises
function sayHello(name) {
    return `Hello, ${name}`;
}
console.log(say Hello( name: "Thor"));

//2nd problem
// let hellowmessage = sayHello(name: "Thor");

//console.log(hello message);

