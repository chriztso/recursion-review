// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


if(typeof obj === 'string'){
  return '"' + obj + '"';
}
if(Array.isArray(obj)){
  var result = [];
  for(var i = 0; i < obj.length; i++){
    result.push(stringifyJSON(obj[i])); 
  } 
  return '[' + result.join() + ']';
}

if(typeof obj === 'object' && obj !== null ){
 var result = [];
 for(var prop in obj){
  if(prop !== 'functions' && prop !== 'undefined')
  result.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
 }
return '{' + result.join() + '}';  
}





return '' + obj;

  // your code goes here

};
