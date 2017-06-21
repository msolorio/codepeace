function songDecoder(input) {
  return input.split('WUB')
              .filter(words => words !== '')
              .join(' ');
}

module.exports = { songDecoder };