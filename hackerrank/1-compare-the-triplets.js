function allAreNumbers(args) {
  return args.reduce((allNumbers, arg) => {
    if (typeof(arg) !== 'number') return false;
    return allNumbers;
  }, true);
}

function getPoints(a1, a2, a3, b1, b2, b3) {
  const args = Array.prototype.slice.call(arguments, 0);
  if (args.length !== 6) return new Error('6 arguments must be supplied');
  if (!allAreNumbers(args)) return new Error('not all inputs are of type number');

  const alicesScores = args.slice(0, 3);
  const bobsScores = args.slice(3);

  return alicesScores.reduce((points, alicesScore, index) => {
    if (alicesScore > bobsScores[index]) {
      points[0]++;
      return points;
    } else if (alicesScore < bobsScores[index]) {
      points[1]++;
      return points;
    } else return points;
  }, [0, 0]);
}

module.exports = getPoints;
