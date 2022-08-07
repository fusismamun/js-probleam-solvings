/*
function factorial(number){
    let fact = 1;
    for(let i=1; i<= number; i++){
        fact = fact * i;  
      }
      return fact;
}

let firstFactorial = factorial(8);
console.log('Factorial is ', firstFactorial);
*/

function factorial(number){
    let getFectorial = 1;
    for(let i=1; i <= number; i++){
        getFectorial = getFectorial * i;
    }
    return getFectorial;
}

let firstFactioral = factorial(7);
console.log('The Factioral is ', firstFactioral);

let secondFactioral = factorial(8);
console.log('The Factioral is ', secondFactioral);

let thirdFactioral = factorial(9);
console.log('The Factioral is ', thirdFactioral);