const numbers = [10, 15, 30, 45, 60];
console.log(numbers[0]); // Output: 10
console.log(numbers[1]);

const fourthElement = numbers[3];
console.log(fourthElement); // Output: 45


// set or update elements value by index
let abc=45;
abc=50;
numbers[2] = abc;
console.log(numbers[2]); // Output: 50

console.log(numbers); // Output: [10, 15, 50, 45, 60]