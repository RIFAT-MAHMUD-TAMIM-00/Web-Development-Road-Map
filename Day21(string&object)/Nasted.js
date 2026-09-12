const college ={
    name:"MCU",
    class: ["10","12","11"],
    events : ["scienceFair", "Bijoy Uttshob", "21feb"],
    color : "blues",
    unique:{
        colors : "purple",
        result: {
            gpa:5,
            merit:"top"
        }

    }
    

}

college.unique.result.merit="top top top"
console.log(college.unique.colors);
console.log(college.unique.result.merit);
console.log(college.events[1]);
// console.log(college.unique.result[0]);

// To delete any property

delete college.color
console.log(college);