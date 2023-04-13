
// Q1 Write a function to find the maximum element in a array


function findMax(arr){
    let max = arr[0];

  
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i];
    }
  }
  return{max};
}
const arr=[9,2,34,5,645,7,8];
const {max}=findMax(arr);
// printing in the console
console.log(max);
// printing in the html element
document.getElementById('demo1').innerHTML=max;


