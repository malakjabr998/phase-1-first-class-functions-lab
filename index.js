const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]];
};

// Declare returnLastTwoDrivers with const and assign an anonymous function
const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
};

// Example usage:
const driversArray = ["Driver1", "Driver2", "Driver3", "Driver4"];

console.log(returnFirstTwoDrivers(driversArray)); // Output: ["Driver1", "Driver2"]
console.log(returnLastTwoDrivers(driversArray)); 
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]

//fare function
function createFareMultiplier(integer){
    return function (fare){
     return integer*fare
   }
    
}
const fareQuintupler = createFareMultiplier(4)
console.log(fareQuintupler(10))
//fare doubler
function fareDoubler(fare){
return fare*2
}
//fare tripler
function fareTripler(fare){
    return fare*3
}
//select
function selectDifferentDrivers(arrayOfDrivers, theFunction){
    if (theFunction===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if( theFunction===returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}
selectDifferentDrivers(driversArray,selectingDrivers)