// Code your solution in this file!
/*
returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
*/

//! try solution with an arrow function afterwards
// const returnFirstTwoDrivers = () => {
const returnFirstTwoDrivers = function (arrayOfDrivers){
    arrayOfDrivers = ["driver 1", "driver 2", "driver 3", "driver 4", "driver 5"]
    const [a, b] = arrayOfDrivers
    // console.log(a, b);
    return  a, b
}
returnFirstTwoDrivers()

// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff']
// const [medium, small, giant] = dogs
// console.log(medium, small, giant) // Great Pyrenees, Pug, Bull Mastiff