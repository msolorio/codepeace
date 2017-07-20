const should = require('chai').should();

const { firstNonRepeatingLetter } = require('../18-first-non-repeating-letter');

describe('firstNonRepeatingLetter', function() {
	it('should return the first unique character in a string if it is the second letter', function() {
		firstNonRepeatingLetter('elephant').should.equal('l');
	});

	it('should return first unique character checking same letters with different casing as the same character', function() {
		firstNonRepeatingLetter('Elephant').should.equal('l');
	});

	it('should return first unique character in proper casing', function() {
		firstNonRepeatingLetter('ELephant').should.equal('L');
	});
});

describe('firstNonRepeatingLetter', function() {
	it('should return an empty string if all characters repeat', function() {
		firstNonRepeatingLetter('aabbcc').should.equal('');
	});
});
