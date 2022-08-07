// // 1. Variable
var favouritBook = '4 hours work';
// // array 
var favouritBookList = ['positiong', 'hooked', 'start with why', 'shoe dog', 'psychology'];

var bookIndex = favouritBookList.indexOf('psychology'); // to see this variable Posotion

favouritBookList[2] = '4 hours work'; //posotion change 

favouritBookList.push('variable name') //for add some thing

favouritBookList.pop(' variable name') //removed some thing

// conditionals
if (favouritBookList[3] == 'start with why') {
    console.log("it's True")
}
else {
    console.log('oh dear i am sorry');
}

//while loop 
var i = 0; //loop variable

while (i < 10) {
    console.log(i);
    console.log ('its so good');
    i++;
}

//for loop

for(var i=0; i<6; i++) {
    console.log(i);
    console.log("javascript it's soo good. and i love it")
}