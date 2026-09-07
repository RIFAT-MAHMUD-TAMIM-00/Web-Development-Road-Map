const friends = ["Sakib", "Riyad", "Tamim", "Shakib", "Mashrafe"];

console.log(friends.includes("Sakib")); // true
console.log(friends.includes("Junaid")); // false

// case sensitive
// for finding if its on the array or not
if (friends.includes("Riyad")) {
    console.log("Riyad is my friend");
}
else {
    console.log("Riyad is not my friend");
}

// index identify

console.log(friends.indexOf("Tamim")); // 2

console.log(friends.indexOf("Junaid")); // -1