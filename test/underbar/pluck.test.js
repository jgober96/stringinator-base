const _ = require('../../underbar');

describe('pluck()', () => {
    it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Jake', age: 21},
      { name: 'Mark', age: 29},
      { name: 'Zack', age: 31}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([21, 29, 31]);
  });

});