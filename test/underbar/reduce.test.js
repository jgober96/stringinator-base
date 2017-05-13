const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const result = _.reduce([1, 2, 3], (accum, num) => accum + num, 0);
    expect(result).toEqual(6);

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const result = _.reduce([1, 2, 3], (accum, num) => accum + num);
    expect(result).toEqual(6);
  });

});