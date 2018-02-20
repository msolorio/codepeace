const chai = require('chai');
const expect = chai.expect;

const {
  findIndexOfFirstVowel,
  convertWordToPigLatin,
  translateToPigLatin
} = require('../../freecodecamp/6-pig-latin');

describe('fcc6 - translateToPigLatin', function() {

  describe('translateToPigLatin', function() {
    it('should return an error if no input is provided', function() {
      expect(translateToPigLatin('')).to.be.an('error');
      expect(translateToPigLatin('').message).equal('an input was not provided to translateToPigLatin');
    });

    it('should return an error if input is not a string', function() {
      const testCases = [
        1234,
        -1,
        [],
        {},
        true,
        null,
        undefined,
        false,
        NaN
      ];

      testCases.forEach(testCase => {
        expect(translateToPigLatin(testCase)).to.be.an('error');
        expect(translateToPigLatin(testCase).message).equal('input to translateToPigLatin was not a string');
      });

    });

    it('should return a string given valid input', function() {
      expect(translateToPigLatin('this is a sentence')).to.be.a('string');
    });

    const testCases = [{
      input: 'this is pig latin',
      expectedOutput: 'isthay isway igpay atinlay'
    },
    {
      input: 'talking in secret is so much fun apple',
      expectedOutput: 'alkingtay inway ecretsay isway osay uchmay unfay appleway'
    },
    {
      input: 'oranges apples bananas',
      expectedOutput: 'orangesway applesway ananasbay'
    },
    {
      input: 'tuesdays coming did you bring your coat',
      expectedOutput: 'uesdaystay omingcay idday ouyay ingbray ouryay oatcay'
    }];

    it('should return the phrase \'isthay isway igpay atinlay\' given the phrase \'this is pig latin\'', function() {
      testCases.forEach((testCase) => {
        expect(translateToPigLatin(testCase.input)).to.equal(testCase.expectedOutput);
      });
    });
  });

  describe('convertWordToPigLatin', function() {
    const testCases = [
      { input: 'word', expectedOutput: 'ordway' },
      { input: 'apple', expectedOutput: 'appleway' },
      { input: 'str', expectedOutput: 'stray' },
      { input: 'a', expectedOutput: 'away' },
      { input: 'tuesday', expectedOutput: 'uesdaytay' }
    ];

    it('shoud return a string', function() {
      testCases.forEach((testCase) => {
        expect(convertWordToPigLatin(testCase.input)).to.be.a('string');
      });
    });

    it('should output correct word given valid input', function() {
      testCases.forEach((testCase) => {
        expect(convertWordToPigLatin(testCase.input)).to.equal(testCase.expectedOutput);
      });
    });
  });

  describe('findIndexOfFirstVowel', function() {
    const testCases = [
      { input: 'word', expectedOutput: 1 },
      { input: 'apple', expectedOutput: 0 },
      { input: 'str', expectedOutput: -1 },
      { input: 'a', expectedOutput: 0 },
      { input: 'tuesday', expectedOutput: 1 },
      { input: 'string', expectedOutput: 3 }
    ];

    it('shoud return a number', function() {
      testCases.forEach((testCase) => {
        expect(findIndexOfFirstVowel(testCase.input)).to.be.a('number');
      })
    });

    it('should return correct output given valid input', function() {
      testCases.forEach((testCase) => {
        expect(findIndexOfFirstVowel(testCase.input)).to.equal(testCase.expectedOutput);
      });
    });
  });
});
