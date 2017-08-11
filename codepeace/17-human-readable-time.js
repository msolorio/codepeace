const sprintf = require('sprintf-js');

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

// function getFormat(number) {
  
// }

function getHours(seconds) {
  const hours = Math.floor(seconds / 3600);
  const secondsLeft = seconds % 3600;
  return {hours, secondsLeft };
}

function getMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  return { minutes, secondsLeft };
}

function humanReadable(seconds) {
  const { hours, secondsLeft: secondsLeftAfterHours } = getHours(seconds);
  const { minutes, secondsLeft } = getMinutes(secondsLeftAfterHours);

  console.log(`${hours}:${minutes}:${secondsLeft}`);
}

humanReadable(5);

// module.exports = humanReadable;