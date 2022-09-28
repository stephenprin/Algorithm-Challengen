function createPhoneNumber(numbers){
    let firstNum=""
    let secNum=""
    let thirdNum=""
    let newNumber=''
    for (let i = 0; i < numbers.length; i++) {
        newNumber+=numbers.join("")           
    }
     firstNum+=newNumber.substr(0,3)
        //console.log(firstNum)
     secNum +=newNumber.substr(3,3)
     //console.log(secNum)
     thirdNum+=newNumber.substr(-4)
    //console.log(thirdNum)

    return `(${firstNum}) ${secNum}-${thirdNum}`
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))