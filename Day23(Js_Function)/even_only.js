function evenNumberOnly(numbers){
    const evens=[];
    for(const number of numbers){
        // console.log(number)
        if (number%2===0){
            console.log(number);
            evens.push(number);
            // return evens;
        }

    }
    return evens;
}

const numbers=[5,8,91,24,6];
const evens=evenNumberOnly(numbers);
console.log("even numbers are :",evens)