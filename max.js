const business = 4500;
const minister = 5000;
const army = 100000;

if (business > minister && business > army){
    console.log('business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is bigger');
}
else {
console.log('army is bigger')
}

function findlargerst (first,second){
    if (first > second){
        return first ;
    }
    else{
        return second;
    }
}
var largest = findlargerst(0, 10);
console.log(largest);

function findtolargerst (first, second, third){
    if (first > second && first > third){
        return first;
    }
    else if (second > first && second > third){
        return second;
    }
    else{
        return third;
    }
}

var long = findtolargerst(150000, 154545454, 3);
console.log ('The largest number is:' ,long);