// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
}
var twoFer2 = function (name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
};
console.log(twoFer()); // "One for you, one for me"
console.log(twoFer("Elton")); // "One for Elton, one for me"
console.log(twoFer2()); // "One for you, one for me"
console.log(twoFer2("Elton")); // "One for Elton, one for me"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
var year = 2010;
isLeapYear(year) ? console.log("".concat(year, " is a leap year.")) : console.log("".concat(year, " is not a leap year."));
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
