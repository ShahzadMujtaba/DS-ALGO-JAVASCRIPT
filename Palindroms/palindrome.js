// example
// palindrome("abba") === true
// palindrome("abcdefg") === false
function palindrome(str) {
  // console.log(str);
  const reversed_string = str
    .split("")
    .reduce((rev, curr_char) => curr_char + rev);
  reversed_string === str ? console.log("true") : console.log("false");
}
palindrome("abcdefg");
palindrome("abba");
