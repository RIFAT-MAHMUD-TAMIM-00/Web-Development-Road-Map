const duplicateName =["abul","kabul","abul","habul","kabul","zabul"];
const duplicateNum =[1,2,5,4,1,5,4,6,7,9,8,5,4,7]; 


function noDuplicate(array){
    const unique =[];
    for(const items of array){
        if(unique.includes(items)===false){
            unique.push(items);
        }
    }
    return unique;
}

const uniqueArray=noDuplicate(duplicateName);
console.log(uniqueArray);