
// USING SIMPLE ITERATION

function multiAll(input){
    let output=[]
    let prod=1;

    for (let i = 0; i < input.length; i++) {
        prod*=input[i];
        //console.log(prod)
        
        
    }
    for (let j = 0; j < input.length; j++) {
        output.push(prod/input[j])
        
    }
    return output
}


//NESTED LOOP
function multiAll(input){
    let prod=1;
    let output=[]

     for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if(i != j){
               prod *=input[j]
            }
        }
        output.push(prod)
        prod=1
     }
    
     return output
}
console.log(multiAll([1,2,3]))


//USING REDUCE METHOD

function multiAll(input){

    let output=[]

    let nums=input.reduce((total, firstNum)=> total *firstNum);
    //console.log(nums)

    for (let i = 0; i < input.length; i++) {
        output.push(nums/input[i])
        
    }

    return output
}
console.log(multiAll([1,2,3]))