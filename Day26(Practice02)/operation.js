function addNum(num1,num2){
    total=num1+num2;
    return total;

}
function minNum(num1,num2){
    total=num1-num2;
    return total;

}
function mulNum(num1,num2){
    total=num1*num2;
    return total;

}
function divNum(num1,num2){
    total=num1/num2;
    return total;

}
function calculator(a,b,operation){
    if(operation==='add'){
        const result =addNum(a,b);
        return result;
    }
    else if(operation==='substract'){
        const result=minNum(a,b);
        return result;

    }
    else if(operation==="multiple"){
        const result=mulNum(a,b);
        return result;

    }
    else if(operation==="division"){
        const result=divNum(a,b);
        return result;
        
    }
}

const newRes=calculator(10,12,"multiple");
console.log(newRes);
