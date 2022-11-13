function flattenList(arr) {
    let output=[]
  
      const recurFunc=(subArr)=>{
          for (let i = 0; i< subArr.length; i++) {
            const element = subArr[i];
            console.log(element)
              if(typeof(element)=="object"){
                  recurFunc(element)
              }else{
                  output.push(element)
              }
             
          }
      }
      recurFunc(arr)
      return  output
}