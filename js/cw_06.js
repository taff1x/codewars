// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
// Find The Parity Outlier

function findOutlier(integers){
  let outlier;
  let [oddCnt,evenCnt] = [0,0]; //counters for dataType detect
  let dataType; // 0-even - 1-odd
  
  // dataType detect based on 1st three numbers
  for (let [index,number] of integers.entries()) {
    if (index < 3) {
      (number % 2 == 0) ? evenCnt+=1 : oddCnt+=1;
    } else break;
  }
  dataType = (evenCnt > oddCnt) ? 0 : 1; // 0-even - 1-odd

  for (let number of integers) {
    if (Math.abs(number % 2) !== dataType) {
      outlier = number;
      break;
    }
  }
  return outlier;
}