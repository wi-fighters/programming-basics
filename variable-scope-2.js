// Variable scope
// What happens if you remove 'var' from some places?
// What happens if you use let / const?
// Can you follow the program flow, step by step?
// Can you describe what the code is doing at each step?
// Can you predict which values will be logged before you run it?

// experiment, get confused, have fun :)

function a() {
    myVar = 2;
    console.log(myVar); // 2

    function b() {
        console.log(myVar); // 2
    }

    b();
}

let myVar = 1; // 2
console.log(myVar); // 1
a();
console.log(myVar); // 2