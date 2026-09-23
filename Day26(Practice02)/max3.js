const jim=56;
const teim=89;
const kim=68;
if(jim>teim && jim>kim){
    console.log("Jim is boss");
}
else if(teim>jim && teim>kim){
    console.log("teim is boss");
}
else{
    console.log("kim is boss");
}

// Using function

function maxOffThree(num1,num2,num3){
    // using functions
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }

}
const z=maxOffThree(50,60,70);
console.log("largest number is :",z);


// Find heighest numbers using Max function 
const max=Math.max(12,2,6,79,89,88,99);
console.log("max number:",max);