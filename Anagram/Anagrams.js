const anagrams = (strA, strB) => {
  //   let word = str.replace(/[^\w]/g, "").toLoweCase();
  //   if (strA.length !== strB.legth) {
  //     console.log("Not An Anagram");
  //     return;
  //   }
  let charMap1 = {};
  for (let char of strA.replace(/\s/g, "")) {
    charMap1[char.toLowerCase()] = charMap1[char.toLowerCase()] + 1 || 1;
  }
  for (let ch of strB.replace(/\s/g, "")) {
    if (!charMap1[ch]) {
      console.log("Not An Anagram");
      return;
    }
  }
  console.log("Anagram");
};

anagrams("Rail safety", "fairy tales");
