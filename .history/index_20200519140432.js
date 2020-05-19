const returnFirstTwoDrivers = function (drivers) {
  // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
  // console.log('arrayOfDrivers.slice(0, 2) :', arrayOfDrivers.slice(0, 2));
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
