// @ solution 3
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  console.log(result);
}
// @solution 2
// function capitalize(str) {
//   let result = [];
//   for (let word of str.split(" ")) {
//     result.push(word[0].toUpperCase() + word.slice(1));
//   }
//   console.log(result.join(" "));
// }

// @solution 1
// function capitalize(str) {
//   let newarr = str.split(" ");
//   let result = [];
//   newarr.forEach((element) => {
//     result.push(element[0].toUpperCase() + element.slice(1));
//   });
//   console.log(result.join(" "));
// }

capitalize("a lazy fox");
