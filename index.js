// Code your solution in this file

let returnFirstTwoDrivers = function (arr) {
	let newArr = [];
	newArr[0] = arr[0];
	newArr[1] = arr[1]
	return newArr
}

let returnLastTwoDrivers = function (arr) {
	let newArr = [];
	newArr[1] = arr[arr.length - 1];
	newArr[0] = arr[arr.length - 2];
	return newArr;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
	return function (fare) { return fare * int }
}

let fareDoubler = createFareMultiplier(2)

let fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
	return func(arr)
}