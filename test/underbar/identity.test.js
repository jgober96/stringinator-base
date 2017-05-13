const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(4)).toEqual(4);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity(['a',4])).toEqual(['a',4]);
  });

  it('returns the same object if given an object', () => {
    expect(_.identity({a:'a',b:'a'})).toEqual({a:'a',b:'a'});
  });
});