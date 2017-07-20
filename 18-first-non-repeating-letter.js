'use strict';

function firstNonRepeatingLetter(string) {
	const characters = string.toLowerCase().split('');

	for (let i=0, j=characters.length; i<j; i++) {
		let charactersClone = characters.slice(0);
		let character = charactersClone.splice(i, 1)[0];

		if (charactersClone.indexOf(character) < 0) {
			return string.charAt(i);
		};
	}

	return '';
}

module.exports = { firstNonRepeatingLetter };
