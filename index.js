const returnFirstTwoDrivers = function (drivers) {
  
  let a = drivers.slice(0, 2)
  return a
}

const returnLastTwoDrivers = function(drivers) {
  let a = drivers.slice(drivers.length-2, drivers.length)
  return a
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function fn() {
    let total = int * int
    return total
  }
}

const fn = createFareMultiplier

function fareDoubler(fn) {
  let total = fn * 2
  return total
}

const f = createFareMultiplier

function fareTripler(f) {
  let total = f * 3
  return total
}

selectDifferentDrivers(drivers, )




