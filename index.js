// Code your solution in this file!
const returnFirstTwoDrivers = function(arr = [1,2,3,4,5]){
    return [arr[0],arr[1]]
}
const returnLastTwoDrivers = function(arr = [1,2,3,4,5]){
    return [arr[arr.length-2],arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
console.log(selectingDrivers)

function createFareMultiplier(int){
    return function(fare){
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)





console.log(fareDoubler(10))
console.log(fareTripler(10))

const selectDifferentDrivers = function(driverArr, driverFunction){
    return driverFunction(driverArr)
}

console.log(selectDifferentDrivers([1,2,3], returnFirstTwoDrivers))