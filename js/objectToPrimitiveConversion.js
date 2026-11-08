// There are three variants of type conversion, that happen in various situations. They’re called “hints”
// 1. "string" For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like console.log

// 1. "number": For an object-to-number conversion, like when we are doing maths;

let user = { name: "Alli" };

console.log(user);
console.log(user.toString()) // returns [object Object]

console.log(user.valueOf() === user) // returns the object itself

console.log(user.valueOf())

user = {
    name: "Alli",
    money: 10000,

    // for hint="string"
    toString() {
        return `{name: ${this.name}}`
    },

    valueOf() {
        return this.money;
    }
}

console.log(user + 500);
console.log(user.toString())