/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(array1){

    x=array1.length;
    y=0
    for(const number of array1){
        y+=number;

    }
    avg=y/x;
    return avg;

}

const output=make_avg([1,2,3,4,5,7,8,9,10]);
console.log(output);