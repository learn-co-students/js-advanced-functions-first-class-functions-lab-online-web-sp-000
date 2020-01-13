// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  const newArray = [array['0'], array['1']]
  return newArray

}

function returnLastTwoDrivers(array) {
  const newArray = array.slice(-2)
  return newArray
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(intake) {
  let fare = 1
  return function(fare) {
    return fare*intake
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, chooseYourDrive){
  return chooseYourDrive(array)
}