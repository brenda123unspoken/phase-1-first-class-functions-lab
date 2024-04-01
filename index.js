// Code your solution in this file!
//Define returnFirstTwoDrivers function
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// Define returnLastTwoDrivers function
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// Define selectingDrivers array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Define createFareMultiplier function
const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};

// Define fareDoubler function using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Define fareTripler function using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Define selectDifferentDrivers function
const selectDifferentDrivers = function (drivers, selectingFunction) {
    return selectingFunction(drivers);
};

// Test cases
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']

console.log(createFareMultiplier(4)(10)); // Output: 40
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); 
// Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnLastTwoDrivers)); 
// Output: ['Amari', 'Mo']
