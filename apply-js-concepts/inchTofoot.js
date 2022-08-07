function inchToFeet(inches) {
    var feet = inches / 12 ;
    return feet;
}

var grandFatherInches = 132;
var feet = inchToFeet(grandFatherInches);
console.log('dadu hesab mote', feet);

var grandMotherInches= 144;
var feet = inchToFeet(grandMotherInches);
console.log(feet);

// mile to km 

function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var martho = mileToKm(26.2);
console.log('marthon in km:', martho);