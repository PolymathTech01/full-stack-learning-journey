let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "str2"); // a numeric key
map.set(true, "bool1") // a boolean key

// the regular object will convert the keys to string, but
// Maps keep the type, so these tow are different:
console.log(map)
console.log(map.get(1))
console.log(map.get("1"))
console.log(map.size)

// map can also use objects as keys

let john = {name: "John"}

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map

visitsCountMap.set(john, 123);
console.log(visitsCountMap)
console.log(visitsCountMap.get(john));

// using objects as keys is one of the most notable and important Map features.

// Every map.set call return the map itself, so we can "chain" the calls

map.set("hi", "hello")
    .set(2, ['fruits', "food"])
    .set(true, "boolean")
console.log(map)

// Iteration over Map.
//There are 3 methods for looping over a map
//map.keys() -> returns an iterable for keys,
// map.values() -> returns an iterable for values,
// map.entries() -> returns and iterable for entries [key, value], its used by default in for...of
// For instance
let recipeMap = new Map([
        ['cucumber', 500],
        ['tomatoes', 350],
        ['onion', 50]
    ]
)

console.log("printing the keys")
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

console.log("printing the values")
for (let amount of recipeMap.values()) {
    console.log(amount)
}

console.log("printing the entries")
for (let entry of recipeMap) {
    console.log(entry)
}

// The iteration goes in the same
// order as the values were inserted. Map preserves this order, unlike a regular Object.

// Besides that, Map has a built-in forEach method, similar to Array:
recipeMap.forEach((value, key, map) => {
    console.log(`key: ${key}, value: ${value}`)
})


// Object.entries: Map from object
// When a Map is created, we can pass an array (or another iterable)
// with key/value pairs for initialization, like this:
let map2 = new Map([
    ["1", "str1"],
    ["2", "str2"],
    [true, 'bool1']
])

// if we have a plain object, and we'd like to create a Map from it,
// then we can use built-in method Object.entries(obj) that returns an array of key/value pairs
// for an object exactly in that format

let obj = {
    name: "John",
    age: 33
}
let map3 = new Map(Object.entries(obj))
console.log(Object.entries(obj))
console.log(map3)

// Object.fromEntries: object from Map
// This does the reverse of Object.entries given an array of [key, value] pairs,
// it creates an object from them;

let prices = Object.fromEntries([
    ["banana", 1],
    ["orange", 2],
    ["meat", 4]
]);

console.log(prices)

map = new Map();
map.set("banana", 1)
    .set("orange", 2)
    .set("meat", 4);
obj = Object.fromEntries(map.entries())
let obj1 = Object.fromEntries(map)

console.log("with .entries() ", obj)
console.log("without .entries() ", obj1)
console.log(map.entries())

// Set
let set = new Set();
let alli = {name: "Alli"}
let pete = {name: "Pete"}
let mary = {name: "Mary"};

// visits, some users come multiple times
set.add(alli);
set.add(pete);
set.add(mary);
set.add(alli)
set.add(mary);

console.log(set)
console.log(set.size)

for (let user of set) {
    console.log(user.name)
}

// A set can be iterated over using for...of or forEach

set = new Set(["oranges", "apples", "banana"]);

for (let value of set) console.log(value)

set.forEach((value, valueAgain, set) => {
    console.log(valueAgain)
})

function unique(arr) {
    let new_arr = []
    for (let item of arr){
        if(!new_arr.includes(item)){
            new_arr.push(item)
        }
    }
    return new_arr
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const  unique2 =(arr) => {
    return Array.from(new Set(arr))
}
console.log(unique2(values))

// filter anagrams: Anagrams are words that have the same number of same letters,
// but in different order
// Write a function aclean(arr) that returns an array cleaned from anagrams.

// To find all anagrams, let’s split every word to letters and sort them.
// When letter-sorted, all anagrams are same.

function aclean(arr){
    let map = new Map();

    for (let word of arr){
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split("").sort().join('')
        map.set(sorted, word)
    }
    return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr))
let obj2 = {}
for (let word of arr){
    let sorted = word.toLowerCase().split("").sort().join("")
    obj2[sorted] = word
}
console.log(Object.values(obj2))

