"use strict";

// While Loop --------> Why can I not see 2 in the console log?
let x = 2;

while (x < 65536) {
    console.log(x *= 2);
}

// Do While Loop --------> What?
// var conesInInventory = Math.floor(Math.random() * 50) + 50;
// do {
//     var requestedCones = Math.floor(Math.random() * 5) + 1;
//     if (requestedCones < conesInInventory )
// } while ()