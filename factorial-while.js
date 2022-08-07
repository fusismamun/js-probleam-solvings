 function getFectorial(number){
     let factorial = 1;
     let i=1;
     while(i<= number){
         factorial = factorial * i;
         i++;
     }
     return factorial;

 }

 const youFactorial = getFectorial(9);
 console.log(youFactorial);

 function lowFactorial(number){
     let factorial = 1;
     let i= number; 
     while(i>=1){
         factorial = factorial * i;
         i--;
     }
     return factorial;
 }

 const lowFact = lowFactorial(7);
 console.log(lowFact);