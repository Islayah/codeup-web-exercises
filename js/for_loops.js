// #2 for loop exercise
/*function showMultiplicationTable(num) {
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        console.log(num + " x " + multiplier + " = " + num * multiplier);
    }
}

showMultiplicationTable(7);*/

// #3 on for loop exercise
function printRandomNumbers() {
    for (let i = 1; i <= 10; i++) {
        let randomNum = Math.floor(Math.random() * 180) + 20;
        console.log(randomNum);
        if (randomNum % 2 === 0) {
            console.log(randomNum + " is even!");
        } else {
            console.log(randomNum + " is odd!");
        }
    }
}

printRandomNumbers();

// #4 ---What?

// #5
for (let i = 100; i >= 5; i -= 5) {
    console.log(i)
}