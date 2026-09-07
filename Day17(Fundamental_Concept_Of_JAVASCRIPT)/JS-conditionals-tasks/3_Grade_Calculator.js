/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

marks = 85; // Example score
if (marks >=90){
    console.log("Your grade is A.");    
}
else if (marks >=80){
    console.log("Your grade is B.");
}   
else if (marks >=70){
    console.log("Your grade is C.");
}
else if (marks >=60){
    console.log("Your grade is D.");
}
else{
    console.log("Your grade is F.");
}
