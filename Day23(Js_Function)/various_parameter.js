function evenSizedString(str){
    const size= str.length;
    if(size%2===0){
        console.log("even size");
        return true;
    }
    else{
        console.log("odd size");
        return false;
    }
}
// evenSizedString("Dhaka");
// evenSizedString("faka");

function numOfElem(numbers){
    const leng =numbers.length;
    return leng;
    

}
const x= numOfElem([12,45,78,45,1212121,5,5]);
console.log(x);






