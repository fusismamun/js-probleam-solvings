let names = ['babul', 'kabul','habul', 'chabul', 'gabul', 'tabul', 'nabul', 'habul', 'tavul', 'babul', 'nantu', 'kabul','tabul', 'babul'];

function removeDuplicate(names){
    const unique = [];
    for(const element of names){
        if (unique.indexOf(element)== -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate (names);
console.log(uniqueNames);


//Array of Numbers

const numbers = [1, 2, 3, 4, 5, 9, 110, 550, 10, 2, 9, 7, 8, 9, 10, 17, 7, 15, 60, 65, 64, 58, 59, 60, 61, 59, 58, 70, 90, 9, 1 , 2, 3];

function removeDuplicates(numbers){
    const unique = [];
    for (const element of numbers) {
        if(unique.indexOf(element)== -1){
            unique.push(element);
        }
    }
    return unique
}

const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);