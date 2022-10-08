function generateHashtag(str) {
    str=str.trim()
    if (str === '' || str === "#") {
        return false
    }
    let arraySplit = str.split(" ")
    
    const newInput = []
    
  
    
    for(let i=0; i<arraySplit.length; i++){
        newInput.push(arraySplit[i].substr(0, 1).toUpperCase() + arraySplit[i].toLowerCase().slice(1))
        
    }


    
    const hash = newInput.join("")
    const newHash = `#${hash}`
    if (newHash.length ==='') {
        return false;
     }
    if (newHash.length > 140) {
        return false
    } else {
        return newHash
    }
  }
  
console.log(  generateHashtag (""))