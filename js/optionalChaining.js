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

