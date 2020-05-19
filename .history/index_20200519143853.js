/*
index.js
    returnFirstTwoDrivers()
      ✓ should return a new array containing the first two drivers from the passed-in array
    returnLastTwoDrivers()
      ✓ should return an array of the last two drivers
    selectingDrivers
      ✓ has the `returnFirstTwoDrivers` function to as its first element
      ✓ has the `returnLastTwoDrivers` function to as its last element
      ✓ allows us to invoke either function from the array
    createFareMultiplier()
      1) returns a function
      2) should multiply a given value using the created multiplier
    fareDoubler()
      3) is a function
      4) doubles fares
    fareTripler()
      5) is a function
      6) triples fares
    selectDifferentDrivers(arrayOfDrivers, function)
      7) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
      8) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
*/ 


const returnFirstTwoDrivers = function (drivers) {
  // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
  // console.log('arrayOfDrivers.slice(0, 2) :', arrayOfDrivers.slice(0, 2));
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = function (multipleAmount) {
  const createFareMultiplier = function (multipleAmount) {
  return function (retailValue) {
    return multipleAmount * retailValue;
  };
}
const fareDoubler = function(fare){
  return fare * 2
}
const fareTripler = (fare)=> {return fare * 3}

function selectDifferentDrivers(arrayOfDrivers, funct = returnFirstTwoDrivers){
  if (funct == returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
  } else if (funct == returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
  }  else {
    console.log("sorry bub, that's not an option")}
}

// console.log(selectDifferentDrivers(['maggie', 'bart', 'lisa', 'marge', 'homer'],returnFirstTwoDrivers))
// console.log(selectDifferentDrivers(['maggie', 'bart', 'lisa', 'marge', 'homer'],returnLastTwoDrivers))
console.log(selectDifferentDrivers(['maggie', 'bart', 'lisa', 'marge', 'homer'], funct = returnLastTwoDrivers))