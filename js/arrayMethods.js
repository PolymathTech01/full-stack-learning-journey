// Splice, it can insert, remove and replace elements

let arr = ["I", "study", "JavaScript"]


arr.splice(1, 1) // from index 1 remove 1 element

console.log(arr)

arr = ["I", "study", "Javascript", "right", "now"]

arr.splice(0, 3, "Let's", "dance") // from index 0 remove 3 elements and replace them with 2 new elements
console.log(arr)
arr.splice(2, 0, "beautiful", "language") // from index 2 remove 0 elements and insert 2 new elements

console.log(arr)

// Negative indexes are allowed.

arr.splice(-1, 0, 3, 4)

console.log(arr)