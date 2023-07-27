const positiveValue = (number) =>{
    let sum = 0;
    for(let i =0; i< number.length; i++){
        if(number[i] > 0){
            sum = sum + number[i];
        }
    }
    return sum;
}

console.log(positiveValue([34,40,-35,-345,-34]));