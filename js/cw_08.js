// https://www.codewars.com/kata/52597aa56021e91c93000cb0
// Moving Zeros To The End

function moveZeros(arr) {
  let zeros = [];
  return arr.filter(function (elem) {
    if (elem===0) {
      zeros.push(elem);
    }
    return elem !== 0;
  }).concat(zeros);
}