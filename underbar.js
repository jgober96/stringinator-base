// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  if (n === 1) {
    return array[0];
  } 
  return array.slice(0,n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  if (n === 1) {
    return array[array.length - 1];
  }
  if (n > array.length) {
    return array;
  }
  return array.slice(array.length - n, array.length );
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (var i = fromIndex; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  const length = obj['length'];
  return typeof length === 'number' && length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (!isArrayLike(obj)) {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  } else {
    for (var i = 0; i < obj.length; i++) {
      callback(obj[i], i, obj); 
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  const results = [];
  each(obj, function(currentValue, currentIndexOrKey, obj) {
    results.push(callback(currentValue, currentIndexOrKey, obj));
  });
  return results;
};

// Return an array of the values o a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  let plucked = [];
  for (let k in obj) {
    if (k === key) {
      plucked.push(obj[k]);
    }
  }
  return plucked;
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).

// Was having trouble with this one, so had to go to underbar-pt-1 for solution
// So, note that the code is exactly the same--but I understant how it works now
const reduce = function(obj, callback, initialValue) {
  let accumulator = initialValue;
  let initializing = accumulator === undefined;
  each(obj, (currentValue, currentIndexOrKey, iteratedObj)  => {
    if (initializing) {
      initializing = false;
      accumulator = currentValue;
    } else {
      accumulator = callback(accumulator, currentValue, currentIndexOrKey, iteratedObj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.
const contains = function(obj, target) {
  for (let key in obj) {
    if (obj[key] === target) {
      return true;
    }
  }
  return false;
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, function(passed, value) {
    return passed || !!callback(value)
  }, false);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return true;
    }
  }
  return false;
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  const result = [];
  each(obj, val => {
    if (callback(val)) {
      result.push(val);
    }
  });
  return result;
};

// Return object without the elements / object valuesthat were rejected by the callback.
const reject = function(arr, callback=identity) {
  const result = [];
  each(arr, val => {
    if (!callback(val)) {
      result.push(val);
    }
  });
  return result;
};

// De-duplicates (de-dups) the elements / object values.
// Had trouble with this function at all--so referred directly to underbar pt 1
const uniq = function(obj) {
  const foundValues = {};
  return filter(obj, item => {
    if (item in foundValues) {
      return false;
    }
    foundValues[item] = true;
    return true;
  });
};


module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
