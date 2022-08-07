// n! = n* (n-1)!

function factorial(n){
    if (n==1){
        return 1 ;
    }
    return n * factorial (n-1);
}

const myFactoiral = factorial (10);
console.log (myFactoiral);

const yFactoiral = factorial (5);
console.log (yFactoiral);