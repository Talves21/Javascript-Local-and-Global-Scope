// Global Scope
let globalVal = 'Global';

// Access variable within function
function print() {
    console.log(globalVal);
}
print()
// Can acces variable anywhere within code
console.log(globalVal);

// Local Scope
function local1() {
    let message = 'Local Message';
    console.log(message);
}

// Unable to access variable in earlier function
function local2() {
    let message = 'Local Message';
    console.log(message);
}

local1()
local2()

// Unable to access variable outside of function
// console.log(message);

// Nested Scope
function outerFunction() {
    let outerVar = 'I am scoped to outer function';

    function innerFunction() {
        let innerVar = 'I am scoped to inner function'
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction()
}
outerFunction()

// Implicit Global Variable
foo()
function foo() {
    x = 'I am an implicit global variable'
}
console.log(x);
