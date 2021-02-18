// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const answer = function() {
        return drivers.slice(0, 2);
    }
    return answer();
}

function returnLastTwoDrivers(drivers) {
    const answer = function() {
        return drivers.slice(-2);
    }
    return answer();
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    const answer = function() {
        return num**2;
    }
    return answer;
}

function fareDoubler(num) {
    const answer = createFareMultiplier(num);
    return (answer() / num) * 2;
}

function fareTripler(num) {
    const answer = createFareMultiplier(num);
    return (answer() / num) * 3;
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
}