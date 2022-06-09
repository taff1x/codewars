// https://www.codewars.com/kata/54d7660d2daf68c619000d95
// Common Denominators

function convertFrac(lst){
    if(!lst.length) return ""
    
    const gcd = (a, b) => b == 0 ? a : gcd(b, a % b); // greatest common divisior
    const lcs = (a, b) => Math.floor(a*b / gcd(a, b)); // lowest common denominator
   
    // fraction reduction
    let gcd_val;
    lst.map((fract) => fract.map((item,index,arr) => {
      if(index==0) { gcd_val = gcd(arr[0],arr[1]) }
      arr[index] /= gcd_val;
    }))
  
    // find lcs value from reducted list
    const lcs_value = lst
      .map((fract) => fract.filter((item,index) => index == 1))
      .reduce(lcs);
    
    // going to the same lcs for each fraction
    lst.map((fract) => fract.map((item,index,arr) => arr[index] *= lcs_value / arr[1]))
    
    //preparing result string based on lst
    let result = ''
    for(let fract of lst) {
      result += `(${fract.toString()})`;
    }
    return result
  }