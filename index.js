const returnFirstTwoDrivers = function(arr) {
	return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
	return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
const createFareMultiplier = function(integer) {
	let func = function(fare) {
		return fare * integer
	}
	return func
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arr, func) {
	return func(arr)
}