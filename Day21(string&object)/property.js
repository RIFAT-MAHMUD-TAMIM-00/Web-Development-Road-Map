const person = {
  name: "Sodor Uddin",
  age: 25,
  profession: "teacher",
  salary: 50000,
  married: true,
  "fav places": ["banderban", "saintmatrin", "uganda"],
};
console.log(person);

// Dot notation
console.log(person.profession);
const income = person.salary;
console.log(income);

// Bracket Notation

console.log(person["age"]);
const boyosh = person["age"];
console.log(boyosh);

// error
// console.log(person."fav places")
console.log(person["fav places"])
