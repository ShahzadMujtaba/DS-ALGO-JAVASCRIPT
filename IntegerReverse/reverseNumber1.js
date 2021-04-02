//@desc  Solutin without using any build in function
// @desc Solution 1
function reverseNumber(n) {
  let rev = 0;
  let negative_flag = false;
  if (n > 0) {
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
  } else {
    negative_flag = true;
    let num = n * -1;
    while (num > 0) {
      rev = rev * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
  }

  negative_flag === true ? console.log(rev * -1) : console.log(rev);
}
reverseNumber(981);
