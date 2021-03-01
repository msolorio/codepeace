/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
*/

// FIND 3 MOST FREQUENT WORDS IN STRING OF TEXT
function findFrequentWords(text) {
  // REMOVE ALL NON-ALPHANUMERIC, NON-SPACES, AND NON-APOSTROPHES
  const wordsString = text.replace(/[^0-9a-zA-Z\s']/gi, '');

  // GET ARRAY OF LOWERCASE WORDS
  const wordsArray = wordsString
    .split(' ')
    .filter((word) => !(word === '' || word === '\''))
    .map((word) => word.toLowerCase());

  const uniqueWords = [ ...new Set(wordsArray)]; // GET ARRAY OF UNIQUE WORDS

  // SORT FROM MOST TO LEAST COMMON
  const sortedWords = uniqueWords.sort((a, b) => {
    const aOccurences = wordsArray.filter((word) => word === a).length;
    const bOccurences = wordsArray.filter((word) => word === b).length;

    return aOccurences < bOccurences ? 1 : -1;
  });
  
  return sortedWords.slice(0, 3); // GET 3 MOST COMMON WORDS
}
