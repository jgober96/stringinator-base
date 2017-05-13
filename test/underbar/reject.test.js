const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    expect(_.reject([2, 1, 5, 6], num => num % 2 === 1)).toEqual([2,6]);

  });

  it('rejects null values from an object', () => {
    const personalInfo = {
      name: 'jake',
      occupation: 'student',
      age: 21,
      height: null
    };

    const abilityScores = _.reject(personalInfo, (value) => value === null);
    expect(abilityScores).toEqual(["jake", "student", 21]);
  });
});