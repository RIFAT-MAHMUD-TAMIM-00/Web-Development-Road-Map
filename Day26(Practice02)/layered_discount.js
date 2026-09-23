// Multilayer discouunt.... Fist 100 will have to give full payment. 101-200 in this 100 we are getting 10% discount and above 200 you will get 30% discout.. like if we buy 201 we get 30% on 1 product and 10% on other 100.



function layeredDiscountTotal(quantity){
    const first100Price=100;
    const second100Price=90;
    const above200Price=70;
    if(quantity<=100){
        const total = quantity * first100Price;
        return total;

    }
    else if(quantity<=200){
        const first100Total=100*first100Price;
        const remainingQuantity=quantity-100;
        const remainingTotal=remainingQuantity*second100Price;
        const total=first100Price*remainingTotal;
        return total;
    }
    else{
        const first100Total=100*first100Price;
        const second100Total=100*second100Price;
        const remainingQuantity= quantity-200;
        const remainingTotal=remainingQuantity*above200Price;
        const total=first100Total+second100Total+remainingTotal;
        return total;
    }

}
const totalVal=layeredDiscountTotal(250);
console.log(totalVal);