// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers){
    return [drivers[0], drivers[1]]
}) 

const returnLastTwoDrivers = (function(drivers){
    const last = drivers.length - 1
    return [drivers[last - 1], drivers[last]]
})

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const createFareMultiplier = (function(x){
    return x * x
})