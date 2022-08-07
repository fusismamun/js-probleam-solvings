//Leatgest Positive value
function leargerElement (numbers) {
    let largest = 0;
    for(let i=0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > largest){
            largest = element;
        }
    }
    return largest;
}

let oldage = [10, 20, 30, 100, 1000, 200,500, 300, 3000000];
let oldages = leargerElement(oldage);
console.log(oldages);

//largest negative value 

function leargeNegative (number){
    let largest = number[0];
    for(let i=0; i<number.length; i++){
        const element = number[i];
        if ( element > largest){
            largest = element;
        }
    }
    return largest;
}
let age = [-10, -20, -30, -100, -1000, -200, -500, -300, -3000000];
let oldage2 = leargeNegative(age);
console.log('Oldage', oldage2);

//lergest positive value
function bigElement(number){
    let big = 0;
    for( let i=0; i< number.length; i++){
        const element = number[i];
        if(element > big){
            big = element;
        }
    }
    return big;
} 

let studentAge = [10, 20, 30, 100, 1000, 200,500, 300, 3000000];
let student = bigElement(studentAge);
console.log('student age is' ,student);