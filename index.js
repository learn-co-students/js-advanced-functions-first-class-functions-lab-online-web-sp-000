const returnFirstTwoDrivers = function(array){
        let newArray = array.slice(0,2)
        return newArray
}

const returnLastTwoDrivers = function(array){
    let newArray = array.slice(-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(num) {
    return function(number){
        return number *num
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fns){
return fns(array)
}
