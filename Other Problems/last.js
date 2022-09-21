// //Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter 
// words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//  Spaces will be included only when more than one word is present.

//  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 


function spinWord(words){
   let newWords=words.split(" ")
   //console.log(newWords)
   let lastResult=[]
   
   for (let i = 0; i < newWords.length; i++) {
    const element = newWords[i];
    //console.log(element)
    if(element.length >= 5){
      let greatLetter=element.split("").reverse().join('')
     lastResult.push(greatLetter)
      //console.log(greatLetter)
    }else{
        lastResult.push(element)
    }
    
   }
   
   return lastResult.join(' ')
}

console.log(spinWord("Hey james how you doings"))
