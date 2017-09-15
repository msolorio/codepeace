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
    const testCases = [
      {
        case: [
          [0, 0, 0, 0],
          [0, 1, 1, 1],
          [0, 0, 1, 0],
          [0, 1, 1, 1]
        ],
        expectedResult: 7
      },
      {
        case: [
          [-1, -1, 0, -9, -2, -2],
          [-2, -1, -6, -8, -2, -5],
          [-1, -1, -1, -2, -3, -4],
          [-1, -9, -2, -4, -4, -5],
          [-7, -3, -3, -2, -9, -9],
          [-1, -3, -1, -2, -4, -5]
        ],
        expectedResult: -6
      },
      {
        case: [
          [0, -4, -6, 0, -7, -6],
          [-1, -2, -6, -8, -3, -1],
          [-8, -4, -2, -8, -8, -6],
          [-3, -1, -2, -5, -7, -4],
          [-3, -5, -3, -6, -6, -6],
          [-3, -6, 0, -8, -6, -7]
        ],
        expectedResult: -19
      }
    ];

    testCases.forEach((testCase) => {
      expect(findLargestHourglassValue(testCase.case)).to.equal(testCase.expectedResult);
    });
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
