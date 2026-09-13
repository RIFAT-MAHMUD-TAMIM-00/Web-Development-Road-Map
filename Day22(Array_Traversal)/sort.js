const person =["rakib","sakib","akib","dakib"];
const sortedPerson= person.sort();
// console.log(sortedPerson);

const numbers=[4,7,12,38,3,6,1];
const number_asc=[...numbers].sort(function(a,b){return a-b});
const number_dsc=[...numbers].sort(function(a,b){return b-a});
console.log(number_asc);
console.log(number_dsc);