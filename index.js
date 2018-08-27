// Code your solution in this file
function findMatching(array, name){
  let new_array = [];
  for (const value of array){
    if (value.toUpperCase() === name.toUpperCase()){
      new_array.push(value)
    }
  }
  return new_array;
}

function fuzzyMatch(array, chars){
  // console.log(array,name)
  let new_array = [];
  let x= chars.length;
  for (const value of array){
    if (value.slice(0,x).toUpperCase() === chars.toUpperCase()){
      new_array.push(value)
    }
  }
  return new_array;
}

function matchName(array_in, name){
  let new_array = array_in.filter(function (value) { return value.name === name; });
  return new_array;
}
