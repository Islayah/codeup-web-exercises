"use strict";

//My code
/*var userName = prompt("Enter your name: ");

function getName() {
    return userName;
    console.log("Your name is: " + userName);
}function-practice.js*/

//Teacher code
function getName() {
    return prompt("What is your name?");
}

console.log(getName());

//Teacher code for part 2
function showName(username) {
    alert(username);
}

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
