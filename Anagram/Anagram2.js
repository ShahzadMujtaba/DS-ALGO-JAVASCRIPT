function check_anagram(arr1, arr2) {
  const frequency = {};

  for (var i = 0; i < arr1.length; i++) {
    if (frequency[arr1[i].toLowerCase()]) {
      frequency[arr1[i].toLowerCase()]++;
    } else {
      frequency[arr1[i].toLowerCase()] = 1;
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    if (!frequency[arr2[i]]) {
      console.log("Not anagram");
      return;
    } else {
      frequency[arr2[i]]--;
    }
  }

  console.log("anagram");
}

var arr1 = "Rail safety";
var arr2 = "fairy tales";

check_anagram(arr1, arr2);
