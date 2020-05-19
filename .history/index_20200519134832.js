// Code your solution in this file!
/*
returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
*/

//! try solution with an arrow function afterwards
// const returnFirstTwoDrivers = () => {
  
const returnFirstTwoDrivers = function (drivers) {
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
  // console.log('arrayOfDrivers.slice(0, 2) :', arrayOfDrivers.slice(0, 2));
  return drivers.slice(0, 2);
};
returnFirstTwoDrivers()

const returnLastTwoDrivers = function(drivers){
  return drivers.slict(-1, -3)
}
// const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff']
// const [medium, small, giant] = dogs
// console.log(medium, small, giant) // Great Pyrenees, Pug, Bull Mastiff