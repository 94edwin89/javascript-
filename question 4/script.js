function sumArray(array) {
    const ourArray = [1, 4, 0, 9, -3];
    let sum = 0;
  
    for (let i = 0; i < ourArray.length; i += 1) {
    if(ourArray[i]%2==0){
        
        sum += ourArray[i];
    }
    }
    
    return sum;
  }
  
  console.log(sumArray());
  document.getElementById('demo').innerHTML=sumArray();