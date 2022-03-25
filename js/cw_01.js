// https://www.codewars.com/kata/517abf86da9663f1d2000003
// Convert string to camel case

function toCamelCase(str) {
    if (str.indexOf("_") >= 0) {
      str = str.split("_");
    } else if (str.indexOf("-") >= 0) {
      str = str.split("-");
    }
    
    if (str) {
      for (let [index,elem] of str.entries()) {
        if (index > 0) {
          str[index] = elem[0].toUpperCase() + elem.slice(1);
        }
      }
      return str.join("");
    } else return str;
}