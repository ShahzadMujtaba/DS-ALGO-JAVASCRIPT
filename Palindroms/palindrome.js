// example
// palindrome("abba") === true
// palindrome("abcdefg") === false

// @desc solution 2
function palindrome(str) {
  const reversed_string = str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
  });
  console.log(reversed_string);
}

// @desc Solution 1
// function palindrome(str) {
//   const reversed_string = str
//     .split("")
//     .reduce((rev, curr_char) => curr_char + rev);
//   reversed_string === str ? console.log("true") : console.log("false");
// }
palindrome("abba");
