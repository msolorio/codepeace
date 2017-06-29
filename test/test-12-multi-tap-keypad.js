const should = require('chai').should();

const { presses } = require('../12-multi-tap-keypad');

describe('presses', function() {
  it('should return the proper number of keys pressed for the entered phrase', function() {
    const normalCases = [
      {input: 'LOL', expected: 9},
      {input: 'HOW R U', expected: 13}
    ];

    normalCases.forEach((testCase) => {
      presses(testCase.input).should.equal(testCase.expected);
    });
  });
});
