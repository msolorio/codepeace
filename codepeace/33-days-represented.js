/*
How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

days_represented([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16.
*/

// trips = [[1, 5], [3, 7]] --> [1, 2, 3, 4, 5, 6, 7]

// Takes in an array of trip days and returns total number of days during the year employees
// have been on trips. 
function calculateDays(trips) {
  const uniqueDays = trips.reduce((set, trip) => {
    for (let i = trip[0]; i <= trip[1]; i++) set.add(i);
    return set;
  }, new Set());

  return uniqueDays.size;
}

// function calculateDays(trips) {
//   if (!Array.isArray(trips)) {
//     return 'Function input must be an array';
//   }

//   // get array of unique days
//   const uniqueDays = trips.reduce((acc, trip) => {
//     if (!Array.isArray(trip)) {
//       return 'Each trip in trips array must be an array.';
//     }

//     if ((typeof trip[0]) !== 'number' || (typeof trip[1]) !== 'number') {
//       return 'Each trip must be an array containing 2 numbers.'
//     }

//     for (let i = trip[0]; i <= trip[1]; i++) {
//       if (!acc.includes(i)) acc.push(i);
//     };

//     return acc;
//   }, []);

//   return Array.isArray(uniqueDays) ? uniqueDays.length : uniqueDays;
// }

