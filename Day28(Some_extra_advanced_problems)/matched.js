const numbers=[45,65,23,98,19];
// for(let i=0;i<numbers.length;i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    console.log(number);
}

const products =[
    {id:1, name:"walton phone", price:19000},
    {id:2, name:"IPHone phone", price:25000},
    {id:3, name:"Samsung phone", price:35000},
    {id:4, name:"Xaomi phone", price:18000},
    {id:5, name:"macbook phone", price:190000},
    {id:6, name:"lenovo", price:250000},
    {id:8, name:"Samsung laptop", price:55000},
    {id:9, name:" phone", price:18000},
];
// for(const product of products){
//     console.log(product);

// }

function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        // console.log(product.name.includes(search));
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);

        }
    }
    return matched;
}
const result=matchedProducts(products,"phone");
console.log(result);
    