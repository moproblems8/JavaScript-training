// this is for javascript training
/***********************/
// three ways to declare variables
var name = 'John Doe';      // var is global scope, meaning it can be accessed anywhere in the program
let name2 = 'John Doe';      // let is block scope, meaning it can only be accessed within the block it was declared
const name3 = 'John Doe';    // const is block scope, 

// storing values with assignment operator
var a;      // declaring variable
var b = 2;  // declaring and assigning variable
a = 7;      // assigning variable

// you print with console.log()
console.log('Hello World');

// you can add strings together
var myStr = 'This is the start. ' + 'This is the end.';
console.log(myStr);

// you can use backslash to escape characters
var myStr2 = 'FirstLine\n\t\\SecondLine\nThirdLine';
console.log(myStr2);

// you can use += to concatenate strings
var str1 = 'Hello ';
str1 += 'World';
console.log(str1);

// increment and decrement
var myVar = 87;
myVar++;
myVar++;
myVar--;
console.log(myVar);

// augmented math operations
var a = 3;
var b = 17;
var c = 12;
a = a + 12;
a += 12;

// string length
var firstNameLength = 0;
var firstName = 'Ada';
firstNameLength = firstName.length;
console.log(firstNameLength);

// bracket notation to find first character in string
var firstLetterOfFirstName = '';
var firstName = 'Ada';
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

// string immutability
var myStr = 'Jello World';
myStr[0] = 'H';
console.log(myStr); // this will still print 'Jello World'