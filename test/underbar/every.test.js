const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      expect(_.every(['c' , 1])).toEqual(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([1, 3, 5], function (el) {return el % 2 !== 0})).toEqual(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      expect(_.every([1, 3, 6], function (el) {return el % 2 !== 0})).toEqual(false);
    });

  });
});