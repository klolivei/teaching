// complete a funcao is integer de maneira que so numeros sejam retornados

var arr = ['hello', 42, true, function() {}, "123", 3.14, 0, [1], {}];

var isInteger = function(x) {
  return true;
};

Array.prototype.filter = function(f) {
  var newArr = []

  for(var i = 0 ; i < this.length ; i++ ){
      if( f(this[i])  === true) { newArr.push(this[i]) };
  }
};

var newArr = arr.filter(isInteger);
console.log(newArr);
