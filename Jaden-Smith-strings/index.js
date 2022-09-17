function toJadanCase(word){
    return word.toLowerCase().split(" ").map(str=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(" ")
      
    
    
  
}
let word="how can mirrors be real if our eyes aren't real";
console.log(toJadanCase(word))
//How Can Mirrors Be Real If Our Eyes Aren't Real 