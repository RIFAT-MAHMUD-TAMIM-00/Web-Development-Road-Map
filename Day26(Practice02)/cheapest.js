const mobiles=[{name: "samsung", price: 2000,camera:"12mp",color:"black"},{name: "xaomi", price: 3000,camera:"12mp",color:"black"},{name: "oppo", price: 2500,camera:"12mp",color:"black"},{name: "Iphone", price: 6000,camera:"12mp",color:"black"},{name: "walton", price: 1500,camera:"12mp",color:"black"}]

function getCheapestPhone(phones){
    let min =phones[0];
    for(const phone of phones){
        // console.log(phone);
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}

const cheap =getCheapestPhone(mobiles);
console.log(cheap);