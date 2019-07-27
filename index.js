const returnFirstTwoDrivers = drivers => drivers.slice(0, 2)
  
const returnLastTwoDrivers = drivers => drivers.slice(-2)
   
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]
  
const createFareMultiplier = multiplyValue => {
    return function (aValue) {
        return multiplyValue * aValue
    }
}
  
const fareDoubler = createFareMultiplier(2)
  
const fareTripler = createFareMultiplier(3)
  
const selectDifferentDrivers =  (arrayOfDrivers, randomFunc) => randomFunc(arrayOfDrivers)
  