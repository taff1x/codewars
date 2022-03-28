// https://www.codewars.com/kata/523a86aa4230ebb5420001e1
// Where my anagrams at?

function anagrams(word, words) {
  const sort = (sortedWord) => sortedWord.split('').sort().join('');
  return words.filter((checkedWord) => sort(checkedWord) == sort(word));
  }