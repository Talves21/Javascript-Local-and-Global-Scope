function outerFunction() {
    let secret = 'Hidden';
    
    function innerFunction() {
        console.log(secret);
    }
    innerFunction()
}

// This section needs to be within the outer function
// function innerFunction() {
//     console.log(secret);
// }
outerFunction()