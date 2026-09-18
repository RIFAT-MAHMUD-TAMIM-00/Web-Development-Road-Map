/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */
const odds =[];
function oddAvg(number){
    for(const num of number){
        if (num %2===1){
            // console.log(num);
            odds.push(num);

        }

    }
    let sum=0;
    // console.log(odds);
    for(const numb of odds){
        sum+=numb;

    }
    // console.log(sum);
    const count =odds.length;
    console.log(sum,count);
    const avg =sum/count;
    return avg;

}

const numbers =[42,13,58,65,96,81,7];
const avg = oddAvg(numbers);
console.log("avarage of the numbers",avg)