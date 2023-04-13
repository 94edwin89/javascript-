// Q2 Write a function to reverse a string 

function reverseArray(arr1,start,end){
    while(start<end){
        var temp = arr1[start];
        arr1[start]=arr1[end];
        arr1[end]=temp;
        start++;
        end--;

    }
}

function printArray(arr1,size){
    for(var i=0; i<size;i++){
        
        console.log(arr1[i]);
    }
}
var arr1= ['e','d','w','i','n'];
var n=5;
printArray(arr1,n);
reverseArray(arr1,0,n-1);
printArray(arr1,n);

