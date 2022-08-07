function isLeapYear(year){
    if((0 == year % 4) && (0 != year % 100)|| (0 == year % 400)){
        return true;
    }
    else{
       return false;
    }
}
const myYear = 2100;
const isMyYearLeaper = isLeapYear(myYear);
console.log ("is My Year Leep Year?",isMyYearLeaper);