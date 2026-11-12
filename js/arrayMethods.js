// Splice, it can insert, remove and replace elements

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr);

arr = ["I", "study", "Javascript", "right", "now"];

arr.splice(0, 3, "Let's", "dance"); // from index 0 remove 3 elements and replace them with 2 new elements
console.log(arr);
arr.splice(2, 0, "beautiful", "language"); // from index 2 remove 0 elements and insert 2 new elements

console.log(arr);

// Negative indexes are allowed.

arr.splice(-1, 0, 3, 4);

console.log(arr);

// arr.slice([start], [end])

let arr2 = ["t", "e", "s", "t"];

console.log(arr2.splice(1, 2));

// it can be called without arguments: arr.slice() creates a copy of arr. That's often used to obtain a copy for further transformations that should not affect the original array.

// concat
// The method arr.concat creates a new array that includes values from other arrays and additional items.

// The synthax is arr.concat(arg1, arg1...)

console.log(arr2.concat(["n", "o"]));

// forEach, it allows to run a function for every element of the array

let arr3 = ["Bilbo", "Gandalf", "Nazgul", false];
arr3.forEach(console.log);

arr3.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

// Searching in array

// indexOf/lastIndexOf and includes

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.

console.log(arr3.indexOf("Gandalf", 0));
console.log(arr3.includes("Gandalf", 0));

console.log(arr3.indexOf(false)); // returns 3, because false is at index 3

// if we want to check if item exists in the array and dont need the index, the arr.includes is preferred.

// the method arr.lastIndexof() is the same as indexOf(), but looks from right to left

let fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));

// The includes method handles NaN correctly, unlike indexOf
console.log([NaN].indexOf(NaN)); // -1 (wrong)
console.log([NaN].includes(NaN)); // true (correct)

// thats because includes was added to javascript much later and uses the more up to date comparison algorithm internally
// Find and findIndex/findLastIndex

// To find an object with a specific condition we use the arr.find(fn)

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
let result = users.find(function (item, index, array) {
  return item.id === 1;
});

console.log(result);

let user = users.find((item) => item.id == 1);
console.log(user.name);

console.log(users.findIndex((user) => user.name == "John")); // returns the index

// find the index of the last John
console.log(users.findLastIndex((user) => user.name == "John"));

// filter, it returns an array with all matching elements
// The find method looks for a single (first) element that make sthe fucntion returns true.
// If there may be many, we can use arr.filter(fn)

let results = users.filter((user) => user.name == "John");
console.log(results);

// Methods that Transform an array.
// map

// The call arr.map(fn) calls the function for each element of the array and returns an array of the results.

let lengths = fruits.map((fruit) => fruit.length);
console.log(lengths);

// sort(fn)
// this function sorts the array in place, changing its element order.
// it also returns the sorted array, but the reutrned value is usually ignored, as arr itself is modified

let arr4 = [1, 2, 15, 11];

arr4.sort();

console.log(arr4); // the items are sorted as strings by default

// To use our own sorting order, we need to supply a function as the argument of arr.sort()
function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if the values are equal
  if (a < b) return -1; // if the first value is less than the second
}

arr4.sort(compare);

console.log(arr4);

let result2 = [1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + " <> " + b);
  return a - b;
});

console.log(result2);

result2 = [1, -2, 15, 2, 0, 8].sort((a, b) => a - b); // arrow function works best

console.log(result2);

// return a - b tells sort() which number shold come first:

// if result is negative, a comes before b,
// if result is positive, b comes before a;
// if result is zero, their order does not matter;

let countries = ["Österreich", "Andorra", "Vietnam"];

console.log(countries.sort((a, b) => a.localeCompare(b)));
console.log(countries.sort((a, b) => (a > b ? 1 : -1)));

// reverse: this method arr.reverse reverses the ordr of elements in arr.

let arr5 = [1, 2, 3, 4, 5];
console.log(arr5.reverse()); // also returns the array after reversal
console.log(arr5);

// split and join

let names = "Bilbo, Gandalf, Nazgul";
let arr6 = names.split(",");

console.log(arr6);

for (let name of arr6) {
  console.log(`A message to ${name}`);
}
// arr.join(glue) does the reverse to split. It creates a string of arr items joined by glue between them

let str = arr6.join(";");
console.log(str);

// reduce/reduceRight

// let value = arr.reduce(function(accumulator, item, index, array) {
// ...
//   }, [initial]);

// Both methods are used to calculate a single value based on the array.

// The function is applied to all array elements one after another and "carries on" its results to the next call.
// Arguments:
// accumulator: is the result of the previous function call, equals "initail" the first time (if "initial" is provided)
// item is the current array item
// index is the position
// array, is the array

result = arr5.reduce((sum, current) => sum + current, 0);
console.log(result);

// Not using an initial value requires an extreme care, if the array is empty, reduce call without the inital value gives an error

// arr = []

// arr.reduce((sum, current) => sum + current), so its advised to always specify the inital value

// arr.reduceRight, does the same but goes from right to left

// Array.isArray
// Arrays do not form a separate language type. They are based on objects.
// so typeof does not help distinguish a plain object from an array

console.log(typeof {}); // returns "object"
console.log(typeof []); // returns "object"

// But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.
console.log(Array.isArray({}));
console.log(Array.isArray([]));

// Most methods support "thisArg"

// Almost all array methods that call functions – like find, filter, map, except sort – accept an optional second parameter obj
//
// If it is provided, then it is used as this for the function. Otherwise, this is undefined in strict mode, or the global object in non-strict mode."

// arr.find(func, thisArg)
// arr.filter(func, thisArg)
// etc
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) =>
      console.log(this.title + ": " + student),
    );
  },
};

group.showList();

// the value of thisArg parameter becomes this for func

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(student) {
    return student.age >= this.minAge && student.age <= this.maxAge;
  },
};

users = [{ age: 16 }, { age: 20 }, { age: 25 }, { age: 30 }, { age: 17 }];

// find users, for who army.canJoin returns true.

let soldiers = users.filter(army.canJoin, army); // this is same as

users.filter((user) => army.canJoin(user));

console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);
