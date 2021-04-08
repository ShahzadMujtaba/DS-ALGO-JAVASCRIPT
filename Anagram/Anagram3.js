const anagrams = (strA, strB) => {
  let str1 = clearString(strA);
  let str2 = clearString(strB);
  str1 === str2 ? console.log("Anagram") : console.log("Not An Anagram");
};
const clearString = (str) => {
  let result = str.replace(/\s/g, "");
  return result.toLowerCase().split("").sort().join("");
};

anagrams("Rail safety", "fairy tales");
