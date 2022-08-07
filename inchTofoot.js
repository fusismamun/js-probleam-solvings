function inchToFeet(inches) {
    var feet = inches / 12 ;
    return feet;
}

var grandFatherInches = 132;
var feet = inchToFeet(grandFatherInches);
console.log(feet);