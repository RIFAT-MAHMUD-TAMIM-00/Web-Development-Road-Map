// push() method adds one or more elements to the end of an array and returns the new length of the array.

const numbers = [152, 87, 56, 45];
const ages = [];
console.log(numbers);
numbers.push(44);
numbers.push(54);
numbers.push(98, 11, 23);
console.log(numbers);

// pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const numbers2 = [152, 87, 56, 45];
console.log(numbers2);
numbers2.pop();
console.log(numbers2);
numbers2.pop();
console.log(numbers2);

// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const names = ["Sakib", "Riyad", "Tamim", "Shakib", "Mashrafe"];
console.log(names);
names.shift();
console.log(names);

// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const names2 = ["Sakib", "Riyad", "Tamim", "Shakib", "Mashrafe"];
console.log(names2);
names2.unshift("Junaid");
console.log(names2);

