// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];

  //declare result array
  //check the classname of the node vs. the className argument (index of)
  //if classname of node and className are the same, push that node into the array result

  //check if there are childnodes
  var searchNodes = function(node) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        results.push(node);
      }
      if (node.childNodes) {
        for (var i = 0; i < node.childNodes.length; i++) {
          searchNodes(node.childNodes[i]);
        }
      }
    }
  };

  searchNodes(document.body);

  return results;
};
