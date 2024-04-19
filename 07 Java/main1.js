/// var let const if function class
var name = "gwangyu";
console.log(name);
console.log(typeof name);

/// java : number, bool, string
/// int, float, bool, char, string
/// INT8, UINT8, INT16, UINT16
/// INT8.max = 127
/// INT8.min = -128
/// UINT8.max = 255
/// UINT8.min = 0

var age = 28;
console.log(age);
console.log(typeof age);

var bool = true;
console.log(bool);
console.log(typeof bool);


/// VAR, update and re-declare
/// if update

age = 29; //update
console.log(age);

var age = 30; //declare
console.log(age);

// if
if (age > 10) {
    console.log("old");
    var buyAlcohol = true;
    console.log(buyAlcohol);
};
console.log(buyAlcohol);

// function
function add() {
    var one = 1;
    console.log(one);
};
add();
add();
add();
add();

// console.log(one); //Error

// LET, update
let myName = "gwangyu"
// let myName = "qwanqyu" // can not be re-declared
console.log(myName);
myName = "qwanqyu";
console.log(myName);

if (true) {
    let myAge = 28;
    console.log(myAge);
};
// console.log(myAge); //Error

function myFunction() {
    let myFunc = 10;
    console.log(myFunc);
};

myFunction();
// console.log(myFunc); //Error

// CONST
const yourName = "gwangyu";
// const yourName = "qwan"; //Error
// yourName = "qwan";

const myInfo = {
    name: "gwangyu",
    age: 28,
};

console.log(myInfo.age);
myInfo.age = 30;
console.log(myInfo.age);