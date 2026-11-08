function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}

obj = { "+1": "Hello", "+2": "World" };

console.log(isEmpty(obj)); // true
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let salary in salaries) {
  sum += salaries[salary];
}

console.log(sum);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);

// Object reference and copying

let message = "Hello!";
let phrase = message;

// One of the fundamental difference between objects and primitives is that, objects are stored and copied "by reference", whereas primitives are always copied "as a whole value"

// When an object variable is copied, the reference is copied, but the object itself is not duplicated. For instance
let user = { name: "Alli" };

let admin = user; // copy the reference

// We can use either variable to access the object and modify its contents:

admin.name = "Pete";

console.log(user.name);

// Comparison by reference, two objects are equal only if they are the same object.

// Here a, and b reference the same object, thus they are equal;

let a = {};
let b = a; // copy the referece

console.log(a == b);
console.log(a === b);

// But two independet objets are not equal, even though they look alike (both are empty)

let c = {};
let d = {}; // two independent objects
console.log(c == d);

// Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.

const admin01 = {
  name: "John",
};

admin01.name = "Alli";

console.log(admin01);

// The value of user is constant, it must always reference the same object, but properties of that object are free to change.

// In other words, the const user gives an error only if we try to set user=... as a whole.

// Cloning and merging, Object.assign

let details = {
  name: "John",
  age: 30,
};

let clone = {};

for (let key in details) {
  clone[key] = details[key];
}
// Now clone is a fully independent object with the same content

clone.name = "Pete";
console.log(details.name);
console.log(clone.name);

// the object.assign method can also be used, the synthax is:
// Object.assign(dest, ...sources)

let user01 = { name: "Olarinde" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user01, permissions1, permissions2);

console.log(user01.name);
console.log(user01.canView);
console.log(user01.canEdit);

// If the copied property name already exists, it gets overwritten;

let user02 = { name: "Taiwo" };
Object.assign(user02, { name: "Alli" });
console.log(user02);

// Object. assign can also be used to perform simple object cloning

let user03 = {
  name: "John",
  age: 30,
};

let clone01 = Object.assign({}, user03);

console.log(clone01.name); // John
console.log(clone01.age); // 30
console.log(user03 === clone01);
// Nested cloning

let user04 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user04.sizes.height); // 182

// Here when we clone the clone and the user04 will share the same size

let clone02 = Object.assign({}, user04);
console.log(user04.sizes === clone02.sizes);

user04.sizes.width = 11;
console.log(clone02.sizes.width);

// To fix that and make user04 and clone02 truly separate objects, we should use a cloning loop that examines each value of ```user04[key]``` and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

// structuredClone

// The call structuredClone(object) clones the object with all nested properties.

let clone03 = structuredClone(user04);

console.log(user04.sizes === clone03.sizes);

user04.sizes.width = 111;
console.log(clone03.sizes.width);

// Circular reference

let user05 = {};

// user05.me references the user05 itself
user05.me = user05;

let clone04 = structuredClone(user05);
console.log(clone04.me === user05);

// OBJECT METHODS: "this"

let user06 = {
  name: "John",
  age: 30,
};

user06.sayHi = function () {
  console.log("Hello!");
};

user06.sayHi();

user06 = {
  sayHi() {
    console.log("Hello");
  },
};

user = {
  name: "John",
  age: 11,
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi();

user = { name: "Alli" };
admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();

admin["f"]();

// Arrow functioins hae no "this"
// if we reference "this" from such fuction, it's taken from the outer "normal" function

user = {
  firstName: "Taiwo",
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
user.sayHi();

let calculator = {
  sum() {
    return (this.a = this.b);
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};

// A ladder object that allows you to go up and down;

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.showStep();
ladder.down();
ladder.down();
ladder.down();
ladder.showStep();

// ladder.up().up().down().showStep().down().showStep();
ladder.up().up().showStep().down().down().down().showStep()