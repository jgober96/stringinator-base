const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of given array', () => {
    expect(_.first(['z', 'y', 'z','w'])).toEqual('z');
  });

  it('returns the first 2 elements of an array', () => {
    expect(_.first(['a','b','c'], 2)).toEqual(['a','b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.first(['a','b','c'], 5)).toEqual(['a','b','c']);
  });
});