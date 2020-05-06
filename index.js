// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray) {
	let firstTwo = [driverArray[0], driverArray[1]];
	return firstTwo;
}

const returnLastTwoDrivers = function(driverArray) {
	const lastTwo = [driverArray[driverArray.length - 2], driverArray[driverArray.length - 1]];

	return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
	return function(fare) {
		return fare * multiplier;
	}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, driversFunc) {
	return driversFunc(driversArray);
}