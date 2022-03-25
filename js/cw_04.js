// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
// Duplicate Encoder

function duplicateEncode(word){
    let splittedWord = word.toLowerCase().split('');
    let str = '';
    for (let char of splittedWord) {
      (splittedWord.filter((elem) => elem == char).length == 1) ? str+='(' : str+=')';
    }
    return str;
  }