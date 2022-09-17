//Counting Cards

import { Console } from "console"

let cc=(card)=>{
    let count=0
    let newArr=[]
    let sum=0
    let finalResult=''

    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        // console.log(element)
        if(element >=2 && element <=6){
            count=1;
            newArr.push(count)
            
            
            
        }else if(element >=7 && element <=9){
            count=0
            newArr.push(count)
        }else if(element==10 || element=='J' || element=='Q' || element=='K' || element=='A'){
            count=-1;
            newArr.push(count)
        }else{
            return 'Enter a correct card combination'
        }

        
        
    }
        for (let i = 0; i< newArr.length; i++) {
          const b=newArr[i]
          
          sum=sum+b;
        }
          
           if(sum > 0){
             finalResult= sum + ' Bet'
           }else if(sum <=0){
            finalResult=sum + ' Hold'
            
           }
           return finalResult;

        
        
   

}
console.log(cc([2, 3, 4, 5, 6,7, 8, 9,10, 'J', 'Q', 'K', 'A']))