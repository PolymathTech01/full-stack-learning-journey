let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
}
// destructuring assignment split in multiple lines for clarity

let {
    size: {
        width,
        height,
    },
    items: [item1, item2],
    title = "Menu" // not present in the object, (default value is used)
} = options;

console.log(title, width, height, item1, item2)

// Smart function parameters

let options2 = {
    title: "My menu",
    items: ["item1", "item2"],
};

function showMenu({title="untitled", width= 200, height= 200, items=[]}) {
    // title, items - taken from options
    // width, height - defaults used

    console.log(`${title} ${width} ${height}, ${items.length} items`);
}


showMenu({}) // showMenu({}) // all values are default

// we can also do more complex destructuring with nested objects and colon mappings

function newShowMenu({
    title = "Untitled",
    width: w = 100,
    height: h = 200,
    items: [item1, item2], // items, first element goes to item1, second to item2
                     }){
    console.log(`${title} ${w} ${h}`)
    console.log(item1)
    console.log(item2)
}
newShowMenu(options2)

// Please note that such destructuring assumes that showMenu() does have an argument.
//     If we want all values by default, then we should specify an empty object:
function newSecondShowMenu({title="Menusss", width= 800, height= 200} = {}) {
    console.log(`${title} ${width} ${height}`)
}
newSecondShowMenu()