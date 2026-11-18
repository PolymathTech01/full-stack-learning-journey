// Array destructuring

let arr = ["Alli", "Olarinde"]

let [firstName, lastName] = arr;
console.log(firstName + " " + lastName);
[firstName, lastName] = "Alli Olarinde".split(" ")
console.log(firstName + " " + lastName);

// Ignore elements using commas
// unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName2, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstName2 + " " + title);

// can be used with any iterable
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// Assign to anything on the left-side
// We can use any “assignables” on the left side.
// For instance, an object property:

let user = {};
[user.name, user.surname] = "Alli Olarinde".split(" ")
console.log(user)

user = {
    name: "Alli Olarinde",
    age: 30
}
for (let [key, value] of Object.entries(user)) {
    console.log(key, value)
}

// Similar code for Map

let userMap = new Map();
userMap.set("name", "Alli Olarinde");
userMap.set("surname", "Alli Olarinde");
userMap.set("age", 10);

for (let [key, value] of userMap) {
    console.log(key, value)
}

// Swap variables trick

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);

// The rest ...

// usually, if the array is longer than the list at the left, the "extra" items are omitted.
// e.g

let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1)
console.log(name2)

// If we’d like also to gather all that follows –
// we can add one more parameter that gets “the rest” using three dots "...":

let [name3, name4, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// rest is an array of items, starting from the 3rd one

console.log(rest[0])
console.log(rest[1])
console.log(rest.length)

// the 3 dots must be there and it should go last in the destructuring assigment.
// Default values
// if the array is shorter than the list of variables on the left,
// there will be no errors, Absent values are considered undefined
let [test1, test2] = []
console.log(test1)
console.log(test2)

// If we want a “default” value to replace the missing one, we can provide it using =:

let [test = "Guest", test3 = "Annoymous"] = ["Julius"]
console.log(test)
console.log(test3)

// Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.
// For instance, here we use the prompt function for two defaults:

// runs only prompt for surname
// let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

// alert(name);    // Julius (from array)
// alert(surname); // whatever prompt gets

// Object destructuring
// Basic syntax is: let {var1, var2} = {var1:..., var2:...}

let options = {
    title2: "Menu",
    height: 100,
    width: 200
};
// let {title2, width, height} = options;
// console.log(title2);
// console.log(width);
// console.log(height);

// order doesn't matter
// let {height, width, title2} = options;
// console.log(title2);
// console.log(width)
// console.log(height);

// To assign a property to a varaible with another name, we can set the variable
// using a colon;

// let {width: w, height: h, title2} = options;
// console.log(title2)
// console.log(w)
// console.log(h)
// For potentially missing properties we can set default values using "=", like this:

let options2 = {
    title3: 'Menu'
}

// let {width=100, height=100, title3} = options2;

// Default values can be any expressions or even function calls.
// they will be evaluated if the value is not provided.
// Both the column and equality can be combined

let {width: w = 100, height: h = 20, title3} = options2;

// if we have a complex object with many properties, we can extract only what we need

let options3 = {
    title4: 'Menu',
    width2: 100,
    height2: 200
}

let {title4} = options3;
console.log(title4)

// we can also use the rest... pattern after taken what we need

let {width2, ...rest2} = options3
console.log(rest2.height2)
console.log(rest2.title4)

// To show js that this is not a code block, we wrap the expression in parentheses

let title5, width3, height3

({title5, width3, height3} = {title5: "Menu" , width3: 200, height3: 200})
console.log(title5, width3, height3)

