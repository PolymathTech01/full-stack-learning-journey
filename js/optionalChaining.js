// ?.() is used to call a function that may not exist
// In the code below, some of our users have "admin" method, and some don't

let userAdmin = {
    admin() {
        console.log("I am admin")
    }
}

let userGuest = {};

userAdmin.admin?.() // I am admin

userGuest.admin?.() // nothing happens (no such method)

let key = "firstName";
let user1 = {
    firstName: "John"
};

let user2 = null;

console.log(user1?.[key])
console.log(user2?.[key])


// we can also use ?. with delete

delete user?.name // delete user.name if user exists

// we can use ?. for safe reading and deleting, but not writing

// The optinal chaining ?. has no use on the left side of an assignment

let user = null;

// user?.name = "Alli"; // Error, doesnt work