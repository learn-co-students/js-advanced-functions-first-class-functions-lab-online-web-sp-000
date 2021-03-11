// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2);
};

 var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

 const createFareMultiplier = function(x){
     return function(n){
        return x * n;
     };
 };

 const fareDoubler = function(X){
    return X * 2;
 };

 const fareTripler = function(n){
     return n * 3;
 };

 const selectDifferentDrivers = function(arrayOfDrivers, fun) {
     return fun(arrayOfDrivers);
 };



