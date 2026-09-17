function count_zero(binaryString) {
    let count = 0;

    for (let i = 0; i < binaryString.length; i++) {
        
        if (binaryString[i] === "0") {
            console.log(binaryString[i]);
            count++;
        }
    }

    return count;
}

console.log(count_zero("10100101"));