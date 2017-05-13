const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    expect(_.contains(['a','k'], 'k')).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    expect(_.contains(['a','k'], 'w')).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    expect(_.contains({a:'j',b:'k'}, 'k')).toEqual(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    expect(_.contains({a:'j',b:'k'}, 'w')).toEqual(false);
  });

});