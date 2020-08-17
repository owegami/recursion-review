// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;
  if (type === 'number' || obj === null || type === 'boolean') {
    return ''+obj;
  } else if (type === 'function' || obj === undefined) {
    return obj;
  } else if (type === 'string') {
    return '\"' + obj + '\"';
  }

};
