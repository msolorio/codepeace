/*
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Notes
Number passed is always Positive .
Return the result as String

Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 8**1 + 9**2 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 5**1 + 6**2 + 4**3 = 105 != 564 , thus output is "Not !!"
*/

function isDisarium(num) {
  // CONVERT NUM DIGITS INTO ARRAY OF NUMS
  const numsArray = num
  .toString()
  .split('')
  .map(char => Number(char));
  
  // ITERATE, ACCUMULATING THE SUM OF ALL NUMS TO THE POWER OF THEIR POSITION
  return numsArray.reduce((acc, num, index) => acc + (num**(index + 1)));
}
