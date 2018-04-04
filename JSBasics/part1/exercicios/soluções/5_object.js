// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here
//by: klolivei
function hasFalsyValue(obj) {
  if (!obj){
    return true;
  }
  var keys = Object.keys()
  for (var i = 0 ; i < keys.length ; i++){
    if (!obj[key]){
      return true;
    }
    if ( typeof(obj[key]) === "object" ){
      return hasFalsyValue(obj[key]);
    }
    }
  }
  return false;
}
