function checkPassword(password){
    let reasons=[];
    let length= password.length;
    let hasUpperCase=false;
    let hasNumber=false;
    let hasSpace=password.includes(" ");
    for(let i =0;i<length;i++){
        let charecter =password[i];
        console.log(charecter);
        if(charecter>"0"&&charecter<="9"){
            hasNumber=true;


        }
        if(charecter>="A" && charecter<='Z'){
            hasUpperCase=true;
        }
    }
    if(!hasNumber){
        reasons.push("Missing number");

    }
    if(!hasUpperCase){
        reasons.push("Missing Uppercase");
    }
    if(hasSpace==true){
        reasons.push("Space found!!");
    }
    // console.log(password,length,hasNumber,hasUpperCase);
    let isValid =reasons.length==0;
    

    return{
        valid: isValid,
        reasons,
    }

}
let output=checkPassword("helloWorld6");
console.log(output);