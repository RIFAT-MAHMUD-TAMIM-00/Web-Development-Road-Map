const prices=[20000,35000,5000,100000,35000,96000,80000,19000];


function getMin(numbers){
    let min = numbers[0];
    // console.log(numbers);
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}

const cheap =getMin(prices);
console.log("Cheapest one is:",cheap);