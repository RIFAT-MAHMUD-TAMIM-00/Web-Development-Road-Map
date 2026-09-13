const numbers =[1,2,6,5,4,8];



// numbers.reverse();

// console.log(numbers);


const rev_number=[];
for(const num of numbers){
    // console.log(num);

    // rev_number.push(num);
    rev_number.unshift(num);
}
// console.log(rev_number);


const rev_num=[];
for(let i=numbers.length-1 ;i>=0;i--){
    const num1 = numbers[i];
    console.log(num1)
    rev_num.push(num1);
}
console.log(rev_num);