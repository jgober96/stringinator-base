const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([4,4,2,5,5,6])).toEqual([4,2,5,6])
  });
});