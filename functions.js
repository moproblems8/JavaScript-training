// learning functions

// function declaration
function greet() {
    console.log('hello there');
}

// function invocation
greet();

// passing values to functions with arguments
function greet2(name) {
    console.log('hello ' + name);
}

greet2('John');

// global scope and functions
var myGlobal = 10; // this is a global variable

function fun1() {
    oopsGlobal = 5; // this is a global variable, but it was not declared with var because it is inside a function
}

function fun2() {
    var output = '';
    if (typeof myGlobal != 'undefined') {
        output += 'myGlobal: ' + myGlobal;
    }
    if (typeof oopsGlobal != 'undefined') {
        output += ' oopsGlobal: ' + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// local scope and functions
function myLocalScope() {
    var myVar = 5; // this is a local variable, it can only be accessed within this function
    console.log(myVar);
}

myLocalScope();

// global vs local scope in functions
var outerWear = 'T-Shirt'; // this is a global variable

function myOutfit() {
    var outerWear = 'sweater'; // this is a local variable
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// return a value from a function with return
function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

// understanding undefined value returned from a function
var sum = 0;

function addThree() {
    sum += 3;
}

function addFive() {
    sum += 5;
}

console.log(addThree()); // this will return undefined because the function does not have a return statement
console.log(addFive());  // this will return undefined because the function does not have a return statement

// assignment with a returned value
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

// stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

// boolean values
function welcomeToBooleans() {
    return true;
}

// use conditional logic with if statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true';
    }
    return 'No, that was false';
}

console.log(trueOrFalse(true));

// comparison with the equality operator
function testEqual(val) {
    if (val == 12) {
        return 'Equal';
    }
    return 'Not Equal';
}

console.log(testEqual(10));

// comparison with the strict equality operator
function testStrict(val) {
    if (val === 7) {
        return 'Equal';
    }
    return 'Not Equal';
}

console.log(testStrict(10));