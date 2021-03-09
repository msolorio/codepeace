/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

function convertToHex(string) {
  const characters = string.split(''); // CONVERT STRING TO ARRAY
  return characters
    .map(char => char.charCodeAt(0)) // CONVERT TO ASCII CODE
    .map(ascii => ascii.toString(16)) // CONVERT ASCII CODE TO HEX CODE
    .join('') // JOIN HEX CODES BACK INTO STRING
    .replace(/\D/g, '') // FILTER OUT NON NUMERIC CHARACTERS
    .split('')
    .map(char => Number(char))
    .reduce((sum, num) => sum + num, 0); // ADD NUMBERS TOGETHER
}
