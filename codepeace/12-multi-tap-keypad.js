function presses(phrase) {
  const characters = phrase.toUpperCase().split('');

  const keypad = [
    ['1'],
    [' ', '0'],
    ['A', 'B', 'C', '2'],
    ['D', 'E', 'F', '3'],
    ['G', 'H', 'I', '4'],
    ['J', 'K', 'L', '5'],
    ['M', 'N', 'O', '6'],
    ['P', 'Q', 'R', 'S', '7'],
    ['T', 'U', 'V', '8'],
    ['W', 'X', 'Y', 'Z', '9']
  ];

  return characters.reduce((totalTaps, character) => {
    let characterTaps = keypad.reduce((characterTaps, key) => {
      if (key.indexOf(character) > -1) {
        return (key.indexOf(character) + 1) + characterTaps;
      }
      return characterTaps;
    }, 0);
    return totalTaps + characterTaps;
  }, 0);
};

module.exports = { presses };
