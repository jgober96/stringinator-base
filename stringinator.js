const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n)
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return (_.reject(str, (val) => (val === target))).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, (val) => !!(val === target));
};

// reg exp adopted from stack overflow
const isOnlyDigits = function(str) {
  return _.every(str.split(''), (val) => (str.length === 0 ? true : /^\d+$/.test(Number(val))));
};

const filterToOnlyDigits = function(str) {
  return ((_.filter(str, (val) => !isNaN(Number(val)))).join()).replace(/,|\s/g,'');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  const truncated =  [];
  _.each(obj, (val, key, iterObj) => {
    truncated.push(truncateString(val, maxLength));
  });
  return truncated;
};

const countChars = function(str) {
  return _.reduce(str.split(''), function (obj,char) {
    if (obj[char] === undefined) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  return ((_.uniq(str)).join(',')).replace(/,/g,'');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};