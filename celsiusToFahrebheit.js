// celsius to fahrenheit 

function celsiusToFahren(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit
}

const myConverter = celsiusToFahren(1);
console.log('convert celsius to fahrenheit', myConverter);

const youConverter = celsiusToFahren(3);
console.log('convert celsius to fahrenheit for 3', youConverter);

// fahrenheit to celsius 

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5/9 ;
    return celsius;
}

const myConvertr = fahrenheitToCelsius(1);
console.log('convert farenheit to celsious', myConvertr);

const youConverte = fahrenheitToCelsius(3);
console.log('convert fahrenheit to celsius for 3', youConverte);

const myNumper = -5;
const outPut = Math.abs