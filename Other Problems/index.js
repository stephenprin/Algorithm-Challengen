//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    //your code here
    const num=number;
    let output;
    if(num > 0){
      output=num * -1;
    }else if(num <0){
        output= num * (-1)

    }else{
        return 0;
    }

    return output
    //return num
  
  }
  
  console.log(opposite(1.44))