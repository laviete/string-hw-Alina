"use strict";
const getNumVowelsIn = (str) => {
  const vowels = ["A", "E", "I", "O", "U", "Y", "a", "e", "i", "o", "u", "y"];
  return str.split("").filter((letter) => vowels.includes(letter)).length;
};
console.log(getNumVowels("console")); // 3
console.log(getNumVowels("www")); // 0
console.log(getNumVowels("oOo!")); // 3
console.log(getNumVowels("QwertY")); // 2
