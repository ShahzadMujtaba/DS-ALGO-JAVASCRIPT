function FizzBuzz(n) {
  let flag = false;
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
      flag = true;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      flag = true;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      flag = true;
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(20);
