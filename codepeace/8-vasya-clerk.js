/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
*/

function getChangeNeeded(cashForEachPerson) {
  return cashForEachPerson - 25;
}

function tickets(array) {
  const acc =  array.reduce((acc, cashForEachPerson) => {
    let changeNeeded = getChangeNeeded(cashForEachPerson);

    switch(changeNeeded) {
      case 0:
        acc.store[25] += 1;
        break;
      case 25:
        if (acc.store[25] > 0) {
          acc.store[25] -= 1;
          acc.store[50] += 1;
        } else {
          acc.enoughChange = false;
        }
        break;
      case 75:
        if (acc.store[50] > 0 && acc.store[25] > 0) {
          acc.store[50] -= 1;
          acc.store[25] -= 1;
          acc.store[100] += 1;
        } else if (acc.store[25] > 2) {
          acc.store[25] -= 3;
          acc.store[100] += 1;
        } else {
          acc.enoughChange = false;
        }
        break;
    }
    return acc;
  }, {
    enoughChange: true,
    store: {
      25: 0,
      50: 0,
      100: 0
    }
  });

  return acc.enoughChange ? "YES" : "NO";
}

module.exports = { tickets };
