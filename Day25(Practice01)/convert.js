// 12 inches =1 feet

function inchTofeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchTofeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchremaining= inch%12;
  const result= feetNumber+" ft "+inchremaining+" inch";
  return result;

}

const shuvoHeight = inchTofeet(75);
// console.log(shuvoHeight);
const shuvoHeight2 = inchTofeet2(75);
console.log(shuvoHeight2);




