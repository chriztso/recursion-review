// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*
<div>
  <div></div>
<div>
*/

var getElementsByClassName = function(className) {
  // your code here
  var result = [];

  var searchNodes = function(node){
    if (node.classList !== undefined && node.classList.contains(className)){
      result.push(node);
    }
    if (node.childNodes.length > 0) {
      // for (var i =0; i < node.childNodes.length; i++){
      //   searchNodes(node.childNodes[i]);
      // }
      node.childNodes.forEach(function(kid) {
        searchNodes(kid);
      })
    }

  }
  
  searchNodes(document.body);
  return result;

};
