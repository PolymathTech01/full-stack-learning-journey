// using Object.values to loop over property values
// Transforming objects

// Objects lack many methods that exist for arrays, e.g. map, filter and others.
// If we’d like to apply them, then we can use Object.entries followed by Object.fromEntries:
// Use Object.entries(obj) to get an array of key/value pairs from obj.
//     Use array methods on that array, e.g. map, to transform these key/value pairs.
//     Use Object.fromEntries(array) on the resulting array to turn it back into an object.

let prices = {
    banana: 1,
    orange: 2,
    meat: 4
}
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
)
console.log(doublePrices)

console.log(Object.entries(prices).map(entry => [entry[0], entry[1] * 2]))

// Tasks

// sum the properties
let salaries = {
    "John": 100,
    "Peter": 300,
    "Mary": 250
}

function sumSalaries(salaries) {
    let sum = 0
    for (let salary of Object.values(salaries)) {
        sum += salary
    }
    return sum

}

console.log(sumSalaries(salaries))

function sumSalaries2(salaries) {
    return Object.values(salaries).reduce((acc, curr) => acc + curr, 0)
}

console.log(sumSalaries2(salaries))

let user = {
    name: 'John',
    age: 30
};

function count(obj){
    return Object.keys(obj).length;
}

console.log(count(user))