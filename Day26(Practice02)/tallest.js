const heights =[65,66,68,72,78,60];
function getMax(numbers){
    // console.log(numbers);
    // return numbers;

    for (const num of numbers){
        // console.log(num);
        let max = numbers[0];
        for(const num of numbers){
            if(num>max){
                max=num;
                

            }
        

        }
        return max;

    }
}
const max=getMax(heights);
console.log("max value is",max);