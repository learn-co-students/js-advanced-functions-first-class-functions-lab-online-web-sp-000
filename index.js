const returnFirstTwoDrivers = function( arrayDrivers){

    
 return (arrayDrivers.slice(0,2))

}

//Notes
// We Would like return first 2 drivers so we create a function called returnFirtsTwoDrivers = (Anonymous)function 
// then we pass array of drivers as a argument of function 'function( arrayDrivers)' 
//we get return with slice method as "return (arrayDrivers.slice(0,2))"

const returnLastTwoDrivers = function( arrayDrivers){

    
    return (arrayDrivers.slice(-2))
   
   }

   //Notes
// We Would like return last 2 drivers so we create a function called returnLastTwoDrivers = (Anonymous)function 
// then we pass array of drivers as a argument of function 'function( arrayDrivers)' 
//we get return with slice method as "return (arrayDrivers.slice(0,2))"

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

//Notes
// we are creating here an array with selectingDrivers and function as a element of array 


const createFareMultiplier = function(numberOfTickets){
    return function(fare){
       return  numberOfTickets * fare
    }
}
//Notes:
//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns
// a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4,
// it will return a function that takes in a fare as an argument and quadruples the fare.

// this method call Partial Application so are doing here function experission and creating a function which has one argument 
//numberOfTickets "function(numberOfTickets)" so outer function reveives number of tickets so outher function 
 //invoke  inner function  argument(fare ) "return function(fare) for numberof tickets which is argument of outer function{"
// so above fareDoubler function i just pass one argument because we are saticfated outer function we say we have number of tickets 
// we are still missing second argument so wee need partial Applier that function create multiplier one or two arguments 
// not for both you can call function and *2 
const fareDoubler = createFareMultiplier(2)
//Notes

// so we create another function instead of doing all those function above one more time 
//we just write code with partial Applier that function create multiplier one or two arguments 
// not for both you can call function and *2 
//fareDoubler() — Declared a variable with const and assigned a function returned by createFareMultiplier() to it. 
//Invoked createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.


const fareTripler = createFareMultiplier(3)
//Notes:
// so we create another function instead of doing all those function above one more time 
//we just write code with partial Applier that function create multiplier one or two arguments 
// not for both you can call function and *3
//fareTripler() — Declared a variable with const and assigned a function returned by createFareMultiplier() to it.
// Invoked createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

function selectDifferentDrivers(arrayOfDrivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers)

    
    }
    //NOTES 
    //returnLastTwoDrivers, returnFirstTwoDrivers are functions so selectDifferentDrivers take two arguments 
    //one is actually an array of drivers other one is a function 'function selectDifferentDrivers(arrayOfDrivers,returnLastTwoDrivers)'
   //We invoked return returnLastTwoDrivers(arrayOfDrivers) to function as a second argument to returnLastTwoDrivers
  // all we would like to say so this function pass all the list of drivers return returnLastTwoDrivers(arrayOfDrivers)
 // WE already wrote a function for returnLastTwoDrivers and returnFirts TwoDrivers here we just called them together