const chai = require('chai');

const should = chai.should();

const { tickets } = require('../8-vasya-clerk');

describe('tickets', function() {
  it('should return if each person gets change based on the sequence of dollar bills each customer has', function() {
    const normalCases = [
      {input: [25, 25, 50, 50], expected: "YES"},
      {input: [25, 100], expected: "NO"},
      {input: [], expected: "YES"},
      {input: [25, 100, 25, 25], expected: "NO"},
      {input: [25,50,25,100,25,25,25,100,25,50,25,100,50,50], expected: "NO"},
      {input: [25,50,25,100,25,50,25,100,25,25,25,100,100,100], expected: "NO"}
    ];

    normalCases.forEach(function(testCase) {
      tickets(testCase.input).should.equal(testCase.expected);
    });
  });
});
