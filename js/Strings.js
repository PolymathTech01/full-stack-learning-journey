// For position, the square brackes will return undefined for negative values, but the at() method allows negative integers to count back from the last item in the array.

let str = "hello";
console.log(str.at(-1));
console.log(str[-2]);

// Searching for a substring in a string
let str1 = "Widget with id";
console.log(str1.indexOf("Widget"));
console.log(str1.indexOf("widget")); // returns -1, as the search is case-sensitive
console.log(str1.indexOf("id")); 

// if we're interested in all occurences, we can run indexOf in a loop. every new call is made with the position after the previous match

str = "As sly as a flx, as strong as an ox"

let target = 'as';

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos)
    if (foundPos == -1) break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1;
}

// str.lastIndexOf(substr, position)
// This searches from the end of a string to its beginining, it will list the occurences in the reverse order
// For instance, if we want to find all occurences of "as" in the string above, but in reverse order, we can do that using lastIndexOf:
pos = str.length;
while (true) { 
    foundPos = str.lastIndexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Found at ${foundPos}`);
    pos = foundPos - 1;
}

// includes, startsWith, endsWith
// The methods str.includes, str.startsWith and str.endsWith do exactly what they say. They return true or false depending on whether the string contains/starts/ends with the given substring.
let str2 = "Hello, world!";
console.log(str2.includes("world")); // true
console.log(str2.startsWith("Hello")); // true
console.log(str2.endsWith("world!")); // true

// the optional second argument for includes and startsWith is the position in the string to start searching from. For endsWith, the second argument is the length of the string to consider.
console.log(str2.includes("world", 7)); // true
console.log(str2.startsWith("world", 7)); // true
console.log(str2.endsWith("world!", 13)); // true

// Getting a substring
// There are 3 methods in JavaScript to get a substring: substring, substr and slice
// str.slice(start [, end]): Returns the part of the string from start to (but not including) end.

str = "stringify";
console.log(str.slice(0, 5))

// if there is no second argument, then slice goes till the end of the string

console.log(str.slice(2))
// start at the 4th position from the right, end at the 1st from the right
console.log( str.slice(-4, -1) ); // 'gif'

// str.substring(start [, end])
// Returns the part of the string between start and end (not including end).

// This is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).

// For instance:

console.log(str.substring(2, 6)); // 'ring'
console.log(str.substring(6, 2)); // 'ring' (same as above)

// .. but not for slice;
console.log(str.slice(2, 6)); // 'ring'
console.log(str.slice(6, 2)); // '' (empty string)
// Negative arguments are (unlike slice) not supported, they are treated as 0.

// str.substr(start [, length])
// Returns the part of the string from start, with the given length.

// In contrast with the previous methods, this one allows us to specify the length instead of the ending position:

console.log(str.substr(2, 4)) // 'ring', from the 2nd position get 4 characters

// The first argument may be negative, to count from the end;
// console.log(str.substr(-4, 2) ) // 'gi', from the 4th position get 2 characters

// Comparing Strings

// 1. A lowercase letter is always greater than the uppercase:

console.log("a" > "Z") // true