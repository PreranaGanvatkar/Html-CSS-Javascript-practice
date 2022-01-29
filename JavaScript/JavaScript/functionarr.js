function lastElement(array){
    if(array.length===0){
        return null;
    }else{
        
        let last =array[array.length-1];
        return last;
        
    }
}
lastElement([3,5,7]);
lastElement([1]);
lastElement([]);