function wordFrequency(sentence){
    let words=sentence.split(" ");
    
    let wordsCount={};
    
    for(let word of words){
        // console.log(word);
        let wordLowerCase=word.toLowerCase();
        if(wordsCount.hasOwnProperty(wordLowerCase)){
            wordsCount[wordLowerCase]+=1;

        }
        else{
            wordsCount[wordLowerCase]=1;
        }

    }
    return wordsCount;
    // return sentence;

} 
let output=wordFrequency("I love JS and I love coding and JS is Fun");
console.log(output);