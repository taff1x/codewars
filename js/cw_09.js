// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7
// Pick peaks

function pickPeaks(arr) {
    let arrPos = [];
    let arrPeaks = [];
    let tmpPos, tmpPeak;
    if (arr.length > 0) {
        arr.reduce((previousValue, currentValue, index, array) => {
        if (currentValue > previousValue) {
            tmpPos = index;
            tmpPeak = currentValue;
        }
        if (tmpPos && tmpPeak && (array[index+1] < tmpPeak)) {
            arrPos.push(tmpPos);
            arrPeaks.push(tmpPeak);
            tmpPos=null, tmpPeak=null;
        }
        return currentValue;
        });
    }
    return {pos:arrPos,peaks:arrPeaks}
}