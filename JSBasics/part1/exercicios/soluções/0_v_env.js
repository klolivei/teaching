// What will print and why?
// What will change if we delete line 5? Why?

function x() {
    var a;
    console.log(a); // undefined
}

function y() {
    var a = 2;
    console.log(a); // 2
    x();
}

var a = 1;
console.log(a); // 1 
y();
