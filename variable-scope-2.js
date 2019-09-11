// Variable scope
// What happens if you remove 'var' from some places?
// What happens if you use let / const?
// Can you follow the program flow, step by step?
// Can you describe what the code is doing at each step?
// Can you predict the value of the variables at each step?
// Can you predict which values will be logged before you run it?

// experiment, get confused, have fun :)

function a() {
    var myVar = 2;
    console.log(myVar);

    function b() {
        var myVar;
        console.log(myVar);
    }

    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);