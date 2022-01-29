function sumArray(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
       sum+=num[i];
      
    }
     return sum;
}
sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);