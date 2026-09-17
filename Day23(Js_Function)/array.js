/**
 * objective:Write a function to give me the sum of all numbers in an array
 */

function sumOfNumbers(numbers){

    let sum=0;
    for(const num of numbers){
        console.log(num);
        sum+=num;
    

    }
    return sum;
    
}
const nums=[54,56,85];
const sum=sumOfNumbers(nums);
console.log("sum of array is",sum);