function perimeter(n) {
  let fibs = [1, 1];
  for (let i=2; i<=n; i++) {
    let newNum = fibs[fibs.length-1] + fibs[fibs.length-2];
    fibs.push(newNum);
  }

  const sumOfFibs = fibs.reduce((total, num) => total + num, 0);
  
  return sumOfFibs * 4;
}

module.exports = { perimeter };
