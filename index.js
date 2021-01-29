// Code your solution in this file!

const returnFirstTwoDrivers = (ary) => ary.slice(0,2);

const returnLastTwoDrivers = (ary) => ary.slice(-2); 


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num){
   return () => num * 5;
}


const fareDoubler = (num) => num * 2;


function fareTripler(num) {
   return num * 3
}


function selectDifferentDrivers(ary, func){
    return func(ary)
}














