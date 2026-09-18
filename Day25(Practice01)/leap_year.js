/**
 * leap year will that year which year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const leap = isLeapYear(2043);
console.log(leap);

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }
  else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  }
  return false;
}

const leap_year = isLeapYear2(2100);
const leap_year1 = isLeapYear2(2000);
const leap_year3 = isLeapYear2(2052);
console.log(leap_year, leap_year1, leap_year3);
