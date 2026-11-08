"use strict"


// nullish coalescing operator
let height = null;
console.log(height ?? 100); // Output: 100
console.log(height || 100); // Output: 100

// using ?? with || and &&
let x = (1 && 2) ?? 3; // Syntax error

// modifying inplace with nullish coalescing operator
height ??= 100;
console.log(height); // Output: 100


// do while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5); // Output: 0 1 2 3 4

// for loop
for (let j = 0; j < 5; j++) {
    console.log(j); // Output: 0 1 2 3 4
}