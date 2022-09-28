function anagrams(word, words) {
    let result=[]
    let wordNew= word.split("").sort().join("")
     
    for(let i=0; i <words.length; i++){
      if(words[i].split("").sort().join("") ==wordNew){
         result.push(words[i])
      }
    }
    return result
  }