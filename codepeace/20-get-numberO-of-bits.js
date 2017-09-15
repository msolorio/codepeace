// 'use strict';
//
// function getNumberOfBits(a, b) {
//   let diff = Math.abs(a - b);
//
//   const bits = [];
//   let remainder;
//
//   do {
//     remainder = diff % 2;
//     bits.push(remainder);
//     diff = Math.floor(diff / 2);
//   } while (diff !== 0);
//
//   return bits.reduce((sum, bit) => {
//     return sum + bit;
//   }, 0);
// }
//
// module.exports = getNumberOfBits;
