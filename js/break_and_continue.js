"use strict";

// #2
var oddNumber = parseInt(prompt('Enter an odd number between 1 and 50'));

// -------> Could not get the break to work
// for (oddNumber) {
//     if (oddNumber % 2 !== 0) {
//         break;
//         console.log('Pick an odd number this time');
//     }
// }  ------> Bad Code

// #3
if (oddNumber % 2 !== 0) {
    console.log('Number to skip is: 27')
    for (let i = 1; i < 50; i++) {
        if (oddNumber === 27){
            console.log('Yikes! Skipping number: 27')
            continue;
        }
        if (i % 2 !== 0) {
            console.log(`Here is an odd number: ${i}`)

        }
    }
}