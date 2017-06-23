const should = require('chai').should();

const { whoIsNext } = require('../11-double-cola');

describe('whoIsNext', function() {
  it('should return the name of the person drinking the n-th can of cola', function() {
    const normalCases = [
      {input: [["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1], output: "Sheldon"},
      {input: [["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52], output: "Penny"},
      {input: [["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7], output: "Sheldon"},
      {input: [["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 8], output: "Leonard"}
    ];

    normalCases.forEach(function(testCase) {
      whoIsNext(...testCase.input).should.equal(testCase.output);
    });
  });
});
