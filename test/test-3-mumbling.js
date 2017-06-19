const chai = require('chai');
const should = chai.should();

const { accum } = require('../3-mumbling');

describe('accum', function() {
  it('returns proper strings based on inputs', function() {
    
    const normalCases = [
      {input: 'abcd', expected: 'A-Bb-Ccc-Dddd'},
      {input: 'RqaEzty', expected: 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'},
      {input: 'cwAt', expected: 'C-Ww-Aaa-Tttt'}
    ];

    normalCases.forEach(function(testCase) {
      accum(testCase.input).should.equal(testCase.expected);
    })
  });
});
