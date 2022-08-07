const greeting = 'hello, how are you?'; 
function reversString(text){
    let revers = '';
    for(const letter of text){
        revers = letter + revers;
    }
    return revers;
}

const check = reversString(greeting);
console.log(check);

const reverseGreeting = '?uoy era woh ,olleh';
function frontString(text){
    let front = '';
    for(const letter of text){
        front = letter + front;
    }
    return front;
}
const show = frontString(reverseGreeting);
console.log(show);