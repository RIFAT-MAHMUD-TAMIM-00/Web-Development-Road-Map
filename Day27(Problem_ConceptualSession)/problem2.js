function analyzeMarks(marksObj){
    // console.log(marksObj);
    let total =0; 
    let heighestMark= -Infinity;
    let lowestMark= Infinity;
    let heighestSubject= null;
    let lowestSubject=null;
    for(let subject in marksObj){
        
        // console.log(key,"->",marksObj[key]);
        let mark=marksObj[subject];
        total+=mark;
        if(mark>heighestMark){
            heighestMark=mark;
            heighestSubject= subject;


        }
        if(mark<lowestMark){
            lowestMark=mark;
            lowestSubject=subject;
        }
    }
    
    let average=total/Object.keys(marksObj).length;
    // console.log("Total ->",total);
    // console.log("Average ->",average);
    return {
        total,
        average,
        heighestMark,
        lowestMark,
        heighestSubject,
        lowestSubject,

    }

}

const output =analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output);
