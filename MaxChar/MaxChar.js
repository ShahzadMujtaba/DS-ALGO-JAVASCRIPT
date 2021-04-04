// @desc Given a String Print the most commonly used in the string
// Example
// maxChar("abcccccccd") ==="c"
// maxChar("apple 1231111") ==="1
function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      chars[str[i]] += 1;
    } else {
      chars[str[i]] = 1;
    }
  }

  for (let ch in chars) {
    if (chars[ch] > max) {
      max = chars[ch];
      maxChar = ch;
    }
  }
  console.log(maxChar);
}

maxChar("abcccccccd");
