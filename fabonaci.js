/* fibonacci  formula 
 nth = (n-1)th + (n-2) 
 */

 /* const fibo = [0, 1]
 for( let i=2; i <=20; i++){
     fibo[i]= fibo[i-1]+ fibo[i-2];
 }
 console.log(fibo); */

 //function fibonacci 

 function fibonacciSeries (num){
    // input validety  
    if(typeof num != 'number'){
        return '404 error '
    }
    if (num < 2){
        return 'ja vag positive value de'
    }
    // main work 
    const fibo = [0, 1];
    for (let i= 2; i< num; i++){
        fibo[i]= fibo[i-1] + fibo[i-2];
    }
    return fibo;
 }

 let fibonacci = fibonacciSeries(-3);
 console.log(fibonacci);