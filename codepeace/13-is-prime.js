// write a function that returns if a given number is prime or not
function isPrime(num) {
  const absValNum = Math.abs(num);
  if (absValNum === 0 || absValNum === 1) return false;
  for (let i=2; i<absValNum; i++) {
    if (absValNum % i === 0) return false;
  }
  return true;
}

module.exports = { isPrime };
