// https://www.codewars.com/kata/517abf86da9663f1d2000003
// Convert string to camel case

function toCamelCase(str) {
  str = str.split(/_|-/);
  for (let [index,elem] of str.entries()) {
    if (index > 0) {
      str[index] = elem[0].toUpperCase() + elem.slice(1);
    }
  }
  return str.join('');
}