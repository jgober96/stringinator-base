const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    expect(_.indexOf(['a','b','c'], 'a')).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    expect(_.indexOf(['a','b','c'], 'c')).toEqual(2);
  });

  it('returns -1 for a missing value', () => {
    expect(_.indexOf(['a','b','c'], 'd')).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    expect(_.indexOf(['c','c','c'], 'c')).toEqual(0);
  });

  it('starts searching at the given offset', () => {
    expect(_.indexOf(['c','c','c'], 'c', 1)).toEqual(1);
  });

});