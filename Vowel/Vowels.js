function vowels(str) {
  let vowelsList = "aeiou";
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if (vowelsList.includes(ch)) {
      count++;
    }
  }
  console.log(count);
}

vowels("Hi There!");
