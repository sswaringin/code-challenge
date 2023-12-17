const findSum = function(array) {
  // Cycle through each value and accumulate them.
  let finalNumber = array.reduce((a, b) => a + b);
  return finalNumber
};

const findFrequency = function(array) {
  // Create an empty object.
  let uniques = new Object;
    
  // Cycle through array and make an object of unique values.
  array.forEach( element => {
      !!uniques[element] ? uniques[element] += 1 : uniques[element] = 1;
  })
    
  // Make an array of unique keys.
  let uniqueKeys = Object.keys(uniques);

  // Make an array of unique values.
  let uniqueValues = Object.values(uniques);
    
  // Compare values and get the highest value.
  let maxValue = uniqueValues.reduce((a,b) => Math.max(a, b));
    
  // Use the max value to find the max index.
  let maxIndex = uniqueValues.findIndex((element) => element === maxValue);

  // Use the max index to get the max key.
  let maxKey = uniqueKeys[maxIndex];

  // Compare values and get the lowest value.
  let minValue = uniqueValues.reduce((a,b) => Math.min(a, b));

  // Use the min value to find the min index.
  let minIndex = uniqueValues.findIndex((element) => element === minValue);

  // Use the min index to find the min key.
  let minKey = uniqueKeys[minIndex];

  // Populate final object.
  let finalObject = { most: maxKey, least: minKey};

  return finalObject
};

const isPalindrome = function(str) {
  // Ensure the string is always lowercase.
  let processedString = str.toLowerCase();
    
  // A function that makes the string an array, reverses the array, and joins elements back to a string.
  let reverse = string => Array.from(string).reverse().join("");
    
  return processedString === reverse(processedString);
};

const largestPair = function(array) {
  let products = []; 
  // Cycle through the array and compare pairs of indexes.
  for (let i = 1; i < array.length; i++) {
        let currentValue = array[i]; // Start at index 1.
        let previousValue = array[i - 1];
        products.push(currentValue * previousValue);
  }
    
  let highestValue = Math.max(...products); // Find the highest product.
  return highestValue;
};

const removeParenth = function(str) {
  return str.split(/\(\w+\)/).join("");
};

const scoreScrabble = function(str) {
  // Source of truth
  const points = {
        1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
        2: ['d', 'g'],
        3: ['b', 'c', 'm', 'p'],
        4: ['f', 'h', 'v', 'w', 'y'],
        5: ['k'],
        8: ['j', 'x'],
        10: ['q', 'z']
  };
    
  // Split original string into an array.
  let word = str.split("");

  // Create a new array with the values of each letter.
  let letterValues = word.map(letter => {
      for (let key in points) {
          if (points[key].map(point => point === letter).includes(true)) {
              return key;
          }
      }
  });

  // Cycle through each value and reduce them to a total sum.
  let totalValue = letterValues.reduce((total, element) => {
      return total += Number(element);
  }, 0);

  // Return the total sum.
  return totalValue;
};
