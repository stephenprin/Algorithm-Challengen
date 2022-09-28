function withdraw(amount) {
    let hundreds = 0;
    let fifties = 0;
    let twenties = 0;
    
    while(amount > 0) {
      if (amount % 100 == 0) {
        amount -= 100
        hundreds++
      } else if (amount % 50 == 0) {
        amount -= 50
        fifties++
      } else {
        amount -= 20
        twenties++
      }
    }
   return [hundreds, fifties, twenties]
  }
  
  
  console.log(withdraw(200))
  //['aabb', 'bbaa']