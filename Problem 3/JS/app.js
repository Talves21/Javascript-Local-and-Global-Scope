// var name = 'Terrell';
// Change var into let

let name = 'Terrell';

function greet() {
    // Adding const allows the other variable to be displayed
    const name = 'Bob';
    console.log(name);
}

// Displays variable within function
greet()

// Displays let variable
console.log(name);