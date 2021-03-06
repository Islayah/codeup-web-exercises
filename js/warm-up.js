"use strict";

// var person = {
//     name: ["Tony", "Stark"],
//     dob: "May 29, 1970",
//     occupation: "Iron Man"
// }   

// console.log(person);

// var contactInfo = {
//     phoneNumber: "555-55-5555",
//     address: "Nunya",
//     city: "Houston",
//     state: "FO",
//     postalCode: "99000",
//     email: "strongestavenger@avengers.com"
// }

// console.log(contactInfo);

// // Defines a contactInfo object
// function ContactInfo(phoneNumber, address, city, state, postalCode, email) {
//     this.phoneNumber = phoneNumber;
//     this.address = address;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.email = email;
// }


// // Defines a person object
// function Person(name, occupation, dob, contactInfo) {
//     this.name = name;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }

// Make a new person object instance
// let person2 = new Person(
//     ["Thor", "Odinson"], 
//     'Strongest Avenger', 
//     '1/1/1111',
//     new ContactInfo(
//         "555-55-5555",
//         "Nunya",
//         "Houston",
//         "FO",
//         "99000",
//         "strongestavenger@avengers.com"
//     ))

// console.log(person2);

// let randomNum = Math.random();
// console.log(randomNum);
// console.log(randomNum * (10));

/*JS Object Warmup, pt 4:
We are going to create a method which
 allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
Things to consider:
Should this be a standalone function or should it be a method on the Person object?*/

// function getNames () {
//     let namesArr = [];
//     var hasMoreNames = true;
//     while (hasMoreNames) {
//         // get names
//         namesArr.push(prompt("Please enter your desired name"));
//         // if they want more names, keep looping. if not, break the loop
//         hasMoreNames = confirm("Would you like to enter another name?");
//     }
//     return namesArr;
// }
//
// console.log(getNames());

// function warmup (num) {
//     if (num += 1) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// console.log(1)

function isANum(num) {
    return !isNaN(parseFloat(num));
}
// string
console.log(isANum("zebra"));
// numeric string
console.log(isANum("12"));

/*JS Warmup 2-28
Warmup: Write a function called removeAll that takes two parameters. One that represents an array and another that represents a value to be removed from that array. When called this function should return an array with all the values of the original array except the specified value to be removed.
    ex:
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));

// should print
[
    'mosquito',
    'scorpion',
    'mosquito',
    'typo',
    'reference error',
    'type error'
]*/

function removeAll(anArray, valueToRemove) {
    let filteredArray = [];
    // anArray.forEach(function (ele) {
    //     if (valueToRemove !== ele) {
    //         filteredArray.push(ele);
    //     }
    // })
    for (let i = 0; i < anArray.length; i++) {
        if (valueToRemove === anArray[i] {
            continue;
        })
    }
    return filteredArray;
}

var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

console.log(removeAll(bugs, "ant"));
