// ### Task-4

// Count the `number of properties`.

// **Input:**
// <br>
// ```js
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const len =Object.keys(student).length;
console.log(len);

count=0;
for(const leng in student){
    count+=1
    
}
console.log(count);

