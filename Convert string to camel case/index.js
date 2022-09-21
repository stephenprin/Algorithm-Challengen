function toCamelCase(str){
    let splitWord=str.split("-")
    //console.log(splitWord)
    let splitWord2=str.split("_")
    let splitWord3='';
    //console.log(splitWord)
    let nWord=[]
  
   if(splitWord.length >1){
      splitWord3=splitWord
   }else{
      splitWord3=splitWord2
  
   }
  
   for (let i = 0; i < splitWord3.length; i++) {
     
     if(i==0){
      nWord.push(splitWord3[i])
     }
      if( i !=0){
          let yWord =splitWord3[i].substr(0,1).toUpperCase() + splitWord3[i].substr(1)
          nWord.push(yWord)
      }
  
   }
  
   return (nWord.join(""))
  }
  
  console.log(toCamelCase("the-stealth-warrior"))
  