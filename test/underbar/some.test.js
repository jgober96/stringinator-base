const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    expect(_.some([2, 4, 5, 6], function(num) {return num % 2 === 1})).toBe(true);
  });

  it('returns false if no number is odd', () => {
    expect(_.some([2, 4, 2, 6], function(num) {return num % 2 === 1})).toBe(false);
  });

});