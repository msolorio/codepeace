/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function buildList(arrayOfNames) {
  let resultString = '';
  const allButLastTwo = arrayOfNames.slice(0, -2);

  resultString += allButLastTwo.reduce((resultString, person) => {
    return `${resultString}${person.name}, `;
  }, '');
  
  resultString += `${arrayOfNames[arrayOfNames.length-2].name} & ${arrayOfNames[arrayOfNames.length-1].name}`;

  return resultString;
}

function list(arrayOfNames) {
  switch(true) {
    case (arrayOfNames.length == 0):
      return '';
    case (arrayOfNames.length === 1):
      return arrayOfNames[0].name;
    default:
      return buildList(arrayOfNames);
  }
}

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggy'}, {name: 'Marg'}]));