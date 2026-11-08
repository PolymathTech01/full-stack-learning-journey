// By specification, only two primitive types may serve as object property keys:

// string type, or
// symbol type.
// Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1] is the same as obj["1"], and obj[true] is the same as obj["true"].

// Symbols
// A "symbol" represents a unique identifier
// A Value of this type can be created using Symbol()

let id = Symbol();

// we can also give them description, also called symbol name, usefull for debugging purposes

// id is a symbol with the description "id"

id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // symbols are unique. even if they have the same description. the description is just a label, it doesnt affect anything.

// Symbls don't auto-convert to a string
console.log(id1); // in alert this should show an error.

console.log(id.toString());
console.log(id.description);

// Hidden properties
// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

// For instance, if we’re working with user objects, that belong to a third-party code. We’d like to add identifiers to them.

// Let’s use a symbol key for it:

let user = {
  name: "John",
};
id = Symbol("id");

user[id] = 1;

console.log(user[id]); // we can access the data, using the symbol as the key
console.log(user);

// Benefit of usiing "Symbol("id") over a string "id"

user[id] = "Their id value"; // this wont overwrite our own id value as symbols are always unique

// Symbol in an object literal
// if we want touse symbol in an object literal {...} we need square brackes around it.

user = {
  name: "Alli",
  [id]: 123, // not "id": 123
};

// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.

// For instance:

user = {
  name: "Alli",
  age: 30,
  [id]: 123,
};

for (let key in user) console.log(key);

// but direct access by Symbols works

console.log("Direct: " + user[id]);

// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

// In contrast, Object.assign copies both string and symbol properties:

let clone = Object.assign({}, user);

console.log(clone[id]);

// Global Symbols
// In order to read (create if absent) a symbol from the registry, we use
// ```Symbol.for(key)```, this call chekcts the global registry, and if there's a symbol described as  ``key``, then returns it, otherwise creates a new symbol   ``Symbol(key)``
// and stores it in the registry by the given ``key``

// for instance

id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)

let idAgain = Symbol.for("id");

console.log(id === idAgain);

/// Symbol.heyFor

// We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log(Symbol.keyFor(sym))
console.log(Symbol.keyFor(sym2))

// if the sysmbe is not global, it wont be able to find it and returns ``undefined``

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name