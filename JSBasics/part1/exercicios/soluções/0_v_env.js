// O que vai ser impresso e porque?
// se deletar a linha 5 o que acontece?

function x() {
    var a;
    console.log(a); // 1
}

function y() {
    var a = 2;
    console.log(a); // 2
    x();
}

var a = 1;
console.log(a); // 1
y();
