// Code your solution in this file!

// Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.



  function returnFirstTwoDrivers(array){

  return  array.slice(0,2);

} ;



function returnLastTwoDrivers(array){

  return array.slice(-2);
};


 const selectingDrivers =
[returnFirstTwoDrivers, returnLastTwoDrivers]

// afterEach(selectingDrivers)
// afterEach(){
// return (returnFirstTwoDrivers() + returnLastTwoDrivers() )
// }

// createFareMultiplier (){}
   function createFareMultiplier(fare){
     // This is a higher-order function that takes in one argument, an integer,
     // returns a function that will multiply a fare for a ride accordingly.
     // return a function that takes in a fare as an argument and quadruples the fare.
     return function(quads) {
    return fare * quads

     }
   }

   // function fareDoubler(fare){
   //  const double = return function createFareMultiplier() {
   //  }
   //   function createFareMultiplier( fare)
   // }

const fareDoubler   = createFareMultiplier(2)
   // const double = function fareDoubler(fare)
 // Declare a variable with const and
 // assign a function returned by createFareMultiplier() to it.
 //  Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
   // {
   //
   //
   // }

   const fareTripler = createFareMultiplier(3)


   // selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

    const selectDifferentDrivers = function (array,someDriver){
     return someDriver(array);
   }
