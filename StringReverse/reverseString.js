// Given a string, Print a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//@Multiple solutions

// @desc solution 4
const reverseString = (str) => {
  let reverse_str = str.split("").reduce((rev, curr_char) => curr_char + rev);
  console.log(reverse_str);
};

// @desc solution 3
// const reverseString = (str) => {
//   let reverse_str = "";
//   for (let character of str) {
//     reverse_str = character + reverse_str;
//   }
//   console.log(reverse_str);
// };

// @desc solution 2
// const reverseString = (str) => {
//   let reverse_str = str.split("").reverse().join("");
//   console.log(reverse_str);
// };

// @desc solution 1
// const reverseString = (str) => {
//   let result_reverse_str = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     result_reverse_str.push(str[i]);
//   }
//   console.log(result_reverse_str.join(""));
// };
reverseString("Greetings!");
