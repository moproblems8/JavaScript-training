// arrays training

// simple array
var simpleArray = ['one', 2, 'three']; // arrays can contain different data types

// nested array
var nestedArray = [['the universe', 42], ['everything', 101010]]; // arrays can contain other arrays

// access array data with indexes
var array = [50, 60, 70];
var data = array[1];
console.log(data);

// modify array data with indexes
var array = [50, 60, 70];
array[1] = 40;

// access multi-dimensional arrays with indexes
var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]];
var data = array[2][1];
console.log(data);

// manipulate arrays with push(), adds element to end of array
var array = ['Stimpson', 'J', 'cat'];
array.push(['happy', 'joy']);
console.log(array);

// manipulate arrays with pop(), removes last element of array
var array = [1, 2, 3];
var data = array.pop();
console.log(data);

// manipulate arrays with shift(), removes first element of array
var array = [['John', 23], ['cat', 2]];
var data = array.shift();
console.log(data);

// manipulate arrays with unshift(), adds element to beginning of array
var array = [['John', 23], ['cat', 2]];
array.shift();
array.unshift(['Paul', 35]);
console.log(array);