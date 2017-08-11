/*
Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

function getWordOrder(wordsArray) {
  return wordsArray.map((word) => {
    let wordOrder = parseInt(word.match(/[1-9]/g)[0]);
    return {wordOrder: wordOrder, word: word};
  });
}

function getWordsInOrder(wordsWithOrder) {
  return wordsWithOrder.sort((a, b) => {
    return a.wordOrder - b.wordOrder;
  })
  .map((wordObj) => {
    return wordObj.word;
  });
}

function order(words) {
  if (words === '') return '';
  
  const wordsArray = words.split(' ');
  wordsWithOrder = getWordOrder(wordsArray);
  return getWordsInOrder(wordsWithOrder).join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
