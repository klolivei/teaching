// complete the implementation of sum and reduce such that reducing an array
// returns the sum of its values
// [0,1,2,3].fold(sum, 0) === 6

var arr = [0,1,2,3,4];

var sum = function(prev,cur) {return prev + cur};

Array.prototype.reduce = function(f,prev) {
  var result = prev;
  for(var i = 0 ; i < this.length; i ++){
    result = f(result , this[i])
  }
  return result;
};

var total = arr.reduce(sum, 0);
console.log(total);
