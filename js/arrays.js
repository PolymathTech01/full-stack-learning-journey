let arr = new Array()
arr = [1, 2, 3, 4, 5]

// An array can store elements of any type

arr = ["Apple", {name: "Alli"}, true, function() {console.log("Hello")}]

arr[3]()

// Get last element, using negative index wont work 

let fruits = ["Apple", "Orange", "Plum"]

console.log(fruits[fruits.length-1]) // here we need to write the variable name twice, its stressfull

console.log(fruits.at(-1))

// pop extracts the last element of the array and returns it

console.log(fruits.pop()) // returns "Plum"
console.log(fruits) // returns ["Apple", "Orange"]

// push adds an element to the end of the array and returns the new length of the array

console.log(fruits.push("Plum")) // returns 3
console.log(fruits) // returns ["Apple", "Orange", "Plum"]

// methods that work with the beginning of the array
// shift extracts the first element of the array and returns it
console.log(fruits.shift()) // returns "Apple"
console.log(fruits) // returns ["Orange", "Plum"]

// unshift adds an element to the beginning of the array and returns the new length of the array

console.log(fruits.unshift("Apple")) // returns 3
console.log(fruits) // returns ["Apple", "Orange", "Plum"]
// push and unshift can add multiple elements at once

fruits.push("Banana", "Mango")
console.log(fruits) // returns ["Apple", "Orange", "Plum", "Banana", "Mango"]

fruits.unshift("Strawberry", "Pineapple")
console.log(fruits) // returns ["Strawberry", "Pineapple", "Apple", "Orange", "Plum", "Banana", "Mango"]

// An array is a special kind of object. It is a list of elements that are numbered, starting from zero. The length property of an array returns the number of elements in it.

fruits = ["Banana", "Orange", "Apple"]

arr = fruits; // copy by reference

console.log(arr === fruits) // returns true, both variables reference the same array

arr.push("Mango") // modify the arry by referece

console.log(fruits) // returns ["Banana", "Orange", "Apple", "Mango"]

// Some optimizations break when we stopped working with array as an "ordered collection" and start working with it as if it was a regular object.
// For instance, we can do this;

let cars = []
cars[99999] = "Volvo"
cars.type = "sedan"

console.log(cars.length) // returns 100000, the length is the highest index + 1
console.log(cars.type) // returns "sedan", we can add any property to an array, just like an object

// That’s possible, because arrays are objects at their base. We can add any properties to them.

// But the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

// The ways to misuse an array:

// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// Fill the array in the reverse order, like arr[1000], arr[999] and so on.

// Perfomance: push/pop are fast, shift/unshift are slow. The reason is that shift/unshift need to renumber all the elements in the array, while push/pop do not.

// The shift operation must do 3 things:

// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.

// The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.

// The similar thing with the push method.

// Loops

for (let i = 0; i < fruits.length; i++) { 
    console.log(fruits[i])
}
// For arrays there is another form of loop: for..of. It is designed specifically for arrays and similar data structures.

for (let fruit of fruits) {
    console.log(fruit)
}

// We shouldnt use for..in to loop over arrays, because it iterates over all properties, including non-numeric ones. It is designed for generic objects, not arrays.

// About length

// The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

// For instance, a single element with a large index gives a big length:

console.log(cars.length)

// Another interesting thing about the lenggth property is that we can set it manually. If we set it to a smaller value, the array is truncated, this process isnt reversible. If we set it to a larger value, the array becomes sparse.

let arr2 = [1, 2, 3, 4, 5]

arr2.length = 2 // truncate to 2 elements
console.log(arr2) // returns [1, 2]

arr2.length = 5 // return length to 5
console.log(arr2) // returns [1, 2, empty × 3]
console.log(cars)

// to string

// Arrays have their own implementation of toString method that returns a comma-separated list of elements.
console.log(fruits.toString()) // returns "Banana,Orange,Apple,Mango"

console.log([] + 1) // returns "1", because [] is converted to an empty string, then concatenated with 1
console.log([1] + 1) // returns "11", because [1] is converted to "1", then concatenated with 1
console.log([1, 2] + 1) // returns "1,21", because [1, 2] is converted to "1,2", then concatenated with 1

// Dont compare arrays with == or ===, because it will return false, even if the arrays are identical. The reason is that arrays are objects and are compared by reference, not by value. So two different arrays with the same elements are not equal.

console.log([1, 2] == [1, 2]) // returns false
console.log([] === [1, 2]) // returns false