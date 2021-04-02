// @desc Solution 2
// function reverseNumber(n) {
//   let reversenumber = n.toString().split("").reverse().join("");
//   n < 0
//     ? console.log(parseInt(reversenumber) * -1)
//     : console.log(parseInt(reversenumber));
// }

// @desc Solution 3
function reverseNumber(n) {
  let reversenumber = n.toString().split("").reverse().join("");

  console.log(parseInt(reversenumber) * Math.sign(n));
}

reverseNumber(-15);
