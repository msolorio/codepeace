'use strict';


const chai = require('chai');
const expect = chai.expect;

const divisbleByPrimes = require('../../codepeace/25-simple-division');


describe('cp25 - divisbleByPrimes', function() {
  it('should return an error if both inputs are not numbers', function() {
    const testCases = [
      [12, 'a'],
      ['a', 12],
      ['asdf', '1234'],
      [true, 12],
      [null, 12],
      [12, undefined]
    ];

    testCases.forEach(function(testCase) {
      expect(divisbleByPrimes(...testCase)).to.be.an('error');
      expect(divisbleByPrimes(...testCase).message).to.equal('both inputs must be numbers');
    });
  });

  it('should return a boolean', function() {
    const testCases = [
      [12, 15],
      [0, 0],
      [1, 0],
      [0, 1]
    ];

    testCases.forEach(function(testCase) {
      expect(divisbleByPrimes(...testCase)).to.be.a('boolean');
    });
  });

  it('should return the correct boolean given inputs', () => {
    const testCases = [
      { inputs: [2, 256], output: true },
      { inputs: [2, 253], output: false },
      { inputs: [2, 256], output: true },
      { inputs: [9, 243], output: true },
      { inputs: [15, 12], output: false },
      { inputs: [21, 2893401], output: true },
      { inputs: [21, 2893406], output: false },
      { inputs: [54, 2834352], output: true },
      { inputs: [54, 2834359], output: false },
      { inputs: [1000013, 7187761], output: true },
      { inputs: [1000013, 7187762], output: false }
    ];

    testCases.forEach(function(testCase) {
      expect(divisbleByPrimes(...testCase.inputs)).to.equal(testCase.output);
    });
  });
});
