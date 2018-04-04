// O que vai imprimir e porque?
// Se deletar a linha 5 o que acontece

function x() {
    var a;
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
