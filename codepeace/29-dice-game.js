/*

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

Throw       Score
---------   ------------------
5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

*/

// converts diceVals array into object w/ count for each dice val
function getDiceValCount(diceVals) {
  return diceVals.reduce((accObj, diceVal) => {
    if (accObj[diceVal] !== undefined) accObj[diceVal] += 1;
    else accObj[diceVal] = 1;

    return accObj;
  }, {});
}

function getScore(diceVals) {
  const diceValCount = getDiceValCount(diceVals);

  // iterate through diceValCount. For each val calculate points and add to score
  // returning total score
  return Object.keys(diceValCount).reduce((totalScore, diceVal) => {
    const diceValThrees = Math.floor(diceValCount[diceVal] / 3);
    const occurencesRemainder = diceValCount[diceVal] % 3;

    switch(true) {
      case diceVal === '1':
        totalScore += (diceValThrees * 1000);
        totalScore += (occurencesRemainder * 100);
        return totalScore;

      case diceVal === '5':
        totalScore += (diceValThrees * 500);
        totalScore += (occurencesRemainder * 50);
        return totalScore;

      default:
        return totalScore + (diceValThrees * diceVal * 100);
    }
  }, 0);
}
