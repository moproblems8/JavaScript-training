// 'use strict'; // this enables strict mode, which catches common coding mistakes and unsafe actions

// var vs let
var camper = 'James';
var camper = 'David';
console.log(camper); // this will print 'David'

//let camper2 = 'James';
let camper2 = 'David';
console.log(camper2);   // this will throw an error because camper2 was already declared with let
                        // you can reassign camper2, but you cannot redeclare it with let

// const
const s = [5, 7, 2];
function editInPlace() {
    'use strict';
    //s = [2, 5, 7]; // this will throw an error because you cannot reassign a const variable
    s[0] = 2; // this is okay because you are not reassigning the variable, you are modifying the array
    s[1] = 5;
    s[2] = 7;
}
            // const is a read-only variable, but it is not immutable. Meaning you can modify the array, but you cannot reassign it

editInPlace();
console.log(s);

// prevent object mutation
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // this prevents the object from being modified
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// arrow functions
const magic = () => new Date(); // this is the same as bottom function, we use this when we want to write a function in one line
                                // we use const because we do not want to reassign the function
                                // using const prevents accidentally overwriting the function
function magic2() {              // this is the same as top function
    return new Date();
}

// arrow functions with parameter
const myConcat = (arr1, arr2) => arr1.concat(arr2); // this is the same as bottom function
function myConcat2(arr1, arr2) {                    // this is the same as top function
    return arr1.concat(arr2);
}

console.log(myConcat([1, 2], [3, 4, 5]));

// arrow functions with default parameters
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2));

// rest operator
const sum = (...args) => {                   // ...args is the rest operator, it takes all the arguments and puts them into an array
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));

// spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1]; // this is the spread operator, it takes all the elements of arr1 and puts them into arr2
    arr1[0] = 'potato';
}
)(); // this is an anonymous function, it is called immediately after it is defined
console.log(arr2);

// destructuring assignment
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
console.log(x, y, z); // this is the same as bottom code

const { x: a, y: b, z: c } = voxel; // this is destructuring assignment, it is the same as top code
console.log(a, b, c);