const chai = require('chai');
const expect = chai.expect;

const {
  findLargestHourglassValue,
  findHourglassPointVal
} = require('../../hackerrank/3-find-largest-hourglass-value');

describe('findLargestHourglassValue', function() {
  it('should return a number', function() {
    const grid = [
      [1, 3, 0],
      [1, 3, 0],
      [1, 3, 0]
    ];
    expect(findLargestHourglassValue(grid)).to.be.a('number');
  });

  it('should return an error if input is not an array', function () {
    expect(findLargestHourglassValue('grid')).to.be.an('error');
  });

  it('should return an error if grid height and grid length are not equal', function() {
    const grid = [
      [1, 3, 0],
      [1, 3, 0, 2],
      [1, 3, 0]
    ];
    expect(findLargestHourglassValue(grid)).to.be.an('error');
  });

  it('should return the largest hourglass point value given a grid', function() {
    const grid = [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 1]
    ];
    expect(findLargestHourglassValue(grid)).to.equal(7);
  });
});

describe('findHourglassPointVal', function() {
  it('should return the correct point value for an hourglass shape in the top left position', function() {
    const grid = [
      [1, 3, 3, 4],
      [1, 3, 0, 4],
      [1, 3, 2, 4],
      [1, 3, 0, 4]
    ];
    expect(findHourglassPointVal(grid, 0, 0)).to.equal(16);
  });
});
