const returnFirstTwoDrivers = function (arr) {
  const newArr = [];
  newArr.push(arr[0]);
  newArr.push(arr[1]);
  return newArr;
}

const returnLastTwoDrivers = function (arr) {
  let newArr = [];
  newArr.unshift(arr[arr.length - 1]);
  newArr.unshift(arr[arr.length - 2]);
  return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(arg) {
  return fare => fare * arg;
}


const fareDoubler =  createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(first, second) {
  return second(first)
}

