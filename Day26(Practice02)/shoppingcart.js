const products =[
    {name:"shamp",price:300,qantity:2},
    {name:"chiri",price:100,qantity:3},
    {name:"shirt",price:700,qantity:4},
    {name:"pant",price:1200,qantity:1},
];

function carTotal(products){
    let total=0;
    for(const product of products){
        const thisPrice= product.price * product.qantity;
        total= total+thisPrice;
        // console.log(product);
    }
    return total;

}
const shoppingCost=carTotal(products);
console.log(shoppingCost);
