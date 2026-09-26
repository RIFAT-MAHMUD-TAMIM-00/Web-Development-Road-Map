function calcBill(prices, items){
    console.log(prices,items);
    let total=0;
    for(let item in prices){
        let price=prices[item];
        total+=price; 

    }
    // console.log(total);
    let itemCount={}
    for(let item of items){
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        } else{
            

        }
    }
    return{
        total,
        itemCount:{}
    }


}
let output =calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 },["egg", "egg", "rice", "oil", "egg", "sugar"]);
