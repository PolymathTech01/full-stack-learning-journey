const prompt = require("prompt-sync")({ sigint: true });

let billion = 1_000_000_000; // the underscore plays the role of the "syntactic sugar", it makes the number more readable.
billion = 1e9;
console.log(7.3e9);

//  1 micor second (one-millionth of a second)

let mcs = 0.000001

mcs = 1e-6;

// Hex, binary and octal numbers

// Hexadecimal numbers are widely used in JavaScript to represent colors, encode data, and for many other things. But they don't use binary or octal systems.

console.log(0xff) // 255
console.log(0xFF) // 255 (the same, case doesn't matter)

// Binary and octal systems are rarely used, but also supported using the `0b`` and ``0o`` prefixes

let a = 0b11111111;
let b = 0o377;

console.log(a == b)

// toString(base): This method num.toString(base) returns a string representation of ``num`` in the numerical system with the given ``base``

let num = 255;
console.log(num.toString(16))
console.log(num.toString(2))
// The base can vary from 2 to 36. The default is 10. For bases above 10, the letters of the Latin alphabet are used: a stands for 10, b for 11, c for 12, and so on up to z, which represents 35.
// A funny, but useful case for 36, is when we need to turn a long numeric identifier into a short string. For example, the number 123456789 can be represented as "21i3v9" in base 36:

console.log(123456789..toString(36)) // 21i3v9

// Note two dots after the number. The first one is the decimal point, and the second one is the dot for the method call. If we omit the first dot, JavaScript will think that we are trying to access a property of 123456789, which is not what we want.

// to round numbers to the nth digits, we can do that in two ways
// using multiply and divide by 10^n, or using the toFixed(n) method, which returns a string representation of the number rounded to n digits after the decimal point.

let num1 = 12.34;
console.log(Math.round(num1 * 10) / 10);
console.log(num1.toFixed(1));

console.log(0.1 + 0.2)
console.log(0.1 + 0.2 == 0.3); // false, because of the floating point precision issues

// solving this: we use the toFixed() method to round the result to a certain number of decimal places, and then convert it back to a number using the unary plus operator (+):

console.log(+(0.1 + 0.2).toFixed(2) == 0.3); // true

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true, because "str" is not a number

// the value NaN is the only value in JavaScript that is not equal to itself. This means that if we compare NaN with any other value, including itself, the result will always be false. For example:

console.log(NaN === NaN);

console.log(isFinite("str")); // false, because "str" is not a number
console.log(isFinite(Infinity));
console.log(isFinite("15")); // true, because "15" can be converted to a finite number

// Sometimes isFinite is used to validate whether a string value is a regular number. For instance, we can use it to check if a user input is a valid number:

// num = +prompt("Enter a number", ""); // note an empty or space only string is treated as 0, which is a finite number, so it will pass the validation. If we want to treat empty or space only strings as invalid input, we can add an additional check for that:
// if (num === 0 && prompt("Enter a number", "").trim() === "") {
//   console.log("Please enter a valid number");
// }
// if (!isFinite(num)) {
//   console.log("Please enter a valid number");
// } else {
//   console.log("Valid number entered: " + num);
// }

// Number.isNaN and Number.isFinite are more robust versions of isNaN and isFinite, as they do not perform type coercion. For example:
console.log(Number.isNaN(NaN)); // It returns true if the argument is NaN and its type is Number, otherwise it returns false.
console.log(Number.isNaN("str" / 2)); // true, because "str" / 2 is NaN, but its type is not Number, so it returns false.
console.log(Number.isFinite(Infinity)); // false, because Infinity is not a finite number.
console.log(Number.isFinite("15")); // false, because "15" is not of type Number.

// parseInt and parseFloat are functions that can be used to convert strings to numbers. They parse a string and return an integer or a floating-point number, respectively. For example:
console.log(parseInt("100px")); // 100, because parseInt stops parsing when it encounters a non-digit character.
console.log(parseFloat("12.5em")); // 12.5, because parseFloat stops parsing when it encounters a non-digit character.

// They both return NaN if the first character cannot be converted to a number. For example:
console.log(parseInt("a123")); // NaN, because the first character is not a digit.
console.log(parseFloat("a123")); // NaN, because the first character is not a digit.

// The second argument of parseInt is the radix, which specifies the base of the numeral system to be used. For example:
console.log(parseInt("ff", 16)); // 255, because "ff" in base 16 is equal to 255 in base 10.