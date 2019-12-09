// Code your solution in this file!


   const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0,2)
   } 

   const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(driverArray.length-2)
   } 

   const selectingDrivers = [returnFirstTwoDrivers,  returnLastTwoDrivers ]


   function createFareMultiplier( int ) {

	   	return function(fare){
	   		return int * fare;
	   	}
   	
   }


  const doubler = createFareMultiplier(2);

  function fareDoubler(fare) {
   	return doubler(fare)
  }

  const tripler = createFareMultiplier(3);

  
   function fareTripler(fare) {
   	return tripler(fare)
  }


  function fetchSpecifiedDrivers(arr, fn){
  	return fn(arr);
  }