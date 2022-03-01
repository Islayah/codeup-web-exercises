"use strict";

// Create an object
let car = {};
console.log(typeof car);

// Assign properties to an object

car.make = 'Ford';
console.log(car);

car.model = 'Mustang';
console.log(car);

// Accessing properties
console.log('The car model is: ' + car.model);

// Find keys
console.log(Object.keys(car));
car.year = '1994';
console.log(Object.keys(car));

// In Keyword
if (!('car.numOfWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car);

// Nested Value
let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ["Thor", "Iron Man", "Black Widow", "Steve Rodgers", "Groot", "Wanda"],
    hasGraduated: false
}

console.log(elixirCohort.students);
console.log(elixirCohort.hasGraduated);

elixirCohort.students = [
    {
        name: "Ry",
        age: 27
    },
    {
        name: "Casey",
        age: 27
    }
];
console.log(elixirCohort.students);

// Assigning functionality(behaviors) to an object
car.honk = function () {
    console.log("Honk Honk")
}

car.honk();

elixirCohort.printAllStudentNames = function () {
    console.log(this.students);
    this.students.forEach(function (student) {
        console.log(student.name);
    })
}

elixirCohort.printAllStudentNames();

// Can assign properties when creating an object
let cohort = {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022'
}

console.log(cohort.name);