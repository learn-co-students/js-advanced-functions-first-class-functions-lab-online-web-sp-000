// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  const array = []
  array.push(drivers[0])
  array.push(drivers[1])
  return array
}

const returnLastTwoDrivers = function(drivers) {
  const array = []
  array.push(drivers[drivers.length-2])
  array.push(drivers[drivers.length-1])
  return array
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

