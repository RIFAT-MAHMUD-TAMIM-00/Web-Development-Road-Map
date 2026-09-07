// if else statement alternative is ternary operator

// age = 10;
// age >= 18 ? console.log("You are an adult.") : console.log("You are not an adult.")


let price = 3000;
const isLeader = false;
if (isLeader === true) {
    price= 0;
}
else{
    price =price+100;
}
console.log(price);

let prices = 3400;

prices = isLeader === true ? 0 : prices + 200;
console.log(prices);