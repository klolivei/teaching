/* Functions */

function square(number) {
  return number * number;
}

console.log(square(4));

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

a = addSquares(2, 3);
b = addSquares(3, 4);
c = addSquares(4, 5);
