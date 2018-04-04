// Modifique o programa para imprimir 1 2 2
// sem modificar os console.log de lugar

function x() {
    console.log(a);
}

function y() {
    var a = 2;
    console.log(a);
    x();
}

var a = 1;
console.log(a);
y();
