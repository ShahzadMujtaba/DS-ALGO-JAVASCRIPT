// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//@ solution 1
const reverseString = (str) => {
  let result_reverse_str = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result_reverse_str.push(str[i]);
  }
  console.log(result_reverse_str.join(""));
};
reverseString("apple");
