// To make the range object iterable (and thus let "for...of" work)
// we need to add a method to the object named Symbol.iterator
// When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
// Onward, for..of works only with that returned object.
// When for..of wants the next value, it calls next() on that object.
// The result of next() must have the form {done: Boolean, value: any},
// where done=true means that the loop is finished, otherwise value is the next value.
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,


            // 3. next() is called on each iteration by the for...of loop

            next() {
                // 4. it should return the value as an object {done: ..., value :...}
                if (this.current <= this.last) {
                    return {done: false, value: this.current++}
                } else {
                    return {done: true}
                }
            }

        }
    }
}
// 1. call to for...of initially calls this

// range[Symbol.iterator] = function () {
//     // it returns the iterator object:
//     // 2. Onward, for...of works only with the iterator object below,
//     // asking for next values
//
//
// }

for (let num of range) {
    console.log(num)
}

// string is iterable

for (let char of "test"){
    console.log(char)
}

// objects that is array-like but not iterable

let arrayLike = {
    0: "hello",
    1: "world",
    length: 2
}

// Array.from, is a universal method, that takes an iterable ar array-like value and makes
// a real Array from it.
let arr = Array.from(arrayLike)
console.log(arr)
console.log(arr.pop())

// the same happens for an iterable

let arr2 = Array.from(range)
console.log(arr2)

// The full syntax for Array.from also allows us to provide an optional “mapping” function:
// Array.from(obj[, mapFn, thisArg])

// The optional second argument mapFn can be a function
// that will be applied to each element before adding it to the array, and thisArg allows us to set this for it.

arr = Array.from(range, num => num * num)
console.log(arr)

// it can also be used to turn a string to array of characters

let str = "Alli"
let chars = Array.from(str)
console.log(chars)

// We can even build surrogate-aware slice on it:

function slice(str, start, end){
    return Array.from(str).slice(start, end).join("");
}

str = '𝒳😂𩷶';
console.log(slice(str, 1, 3))