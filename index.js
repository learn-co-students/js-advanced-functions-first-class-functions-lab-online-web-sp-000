const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2);
    }

const returnLastTwoDrivers = (arr) => {
    return arr.slice(arr.length -2);
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  let computeFare = (fare) => {
    return fare * multiplier
  }
  return computeFare;
}
// createFareMultiplier(10)(4)

const fareDoubler = createFareMultiplier(2)
// fareDoubler(10);

const fareTripler = createFareMultiplier(3)
// fareTripler(5);

const selectDifferentDrivers = (arr, fn) => {
    return fn(arr)
}
// selectDifferentDrivers([1,2,3,4], returnLastTwoDrivers)