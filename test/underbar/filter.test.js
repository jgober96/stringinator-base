const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    expect(_.filter([2, 4, 5, 6, 7, 8, 10, 11], num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const personalInfo = {
      name: 'jake',
      occupation: 'student',
      age: 21,
      height: 58
    };

    const abilityScores = _.filter(personalInfo, (value) => !isNaN(value));
    expect(abilityScores).toEqual([21,58]);
  });
});