/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

function uniqueInOrder(sequence) {
  let characters = [];
  if (typeof(sequence) === 'string') {
    characters = sequence.split('');
  } else if (Array.isArray(sequence)) {
    characters = sequence;
  }

  return characters.reduce((uniqueChars, character, index) => {
    if (characters[index+1] !== character) {
      uniqueChars.push(character);
    }
    return uniqueChars;
  }, []);
}

// console.log(uniqueInOrder([1,2,2,3,3]));

module.exports = { uniqueInOrder };