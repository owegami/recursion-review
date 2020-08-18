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
  } else if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        result.push(stringifyJSON(obj[i]));
      } else {
        result.push(stringifyJSON(obj[i]) + ',');
      }
    }
    return '[' + result.join('') + ']';
  }

};
