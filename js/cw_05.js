// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// Isograms

function isIsogram(str){
  let splittedStr = str.toLowerCase().split('');
  let isIsogram = true;
  for (let char of splittedStr) {
    if (splittedStr.filter((elem) => elem == char).length > 1) {
      isIsogram = false;
    }
  }
  return isIsogram;
}