function minNumber (first, second) {
    if(first < second){
        return first;
    }
    else {
        return second;
    }
}
var small = minNumber(5000,200);
console.log('the samll number is:',small);