// https://www.codewars.com/kata/5263c6999e0f40dee200059d
// The observed PIN

function getPINs(observed) {
  
  if (!Array.prototype.flatMap) {
    function flatMap (f, ctx) {
      return this.reduce
        ( (r, x, i, a) =>
            r.concat(f.call(ctx, x, i, a))
        , []
        )
    }
    Array.prototype.flatMap = flatMap
  } 

  // adjacents numbers near tapped key
  let adjacents = (key) => {
  switch(key) {
    case '0':
      return ['8'];
      break;
    case '1':
      return ['2', '4'];
      break;
    case '2':
      return ['1', '3', '5'];
      break;
    case '3':
      return ['2', '6'];
      break;
    case '4':
      return ['1', '5', '7'];
      break;
    case '5':
      return ['2', '4', '6', '8'];
      break;
    case '6':
      return ['3', '5', '9'];
      break;
    case '7':
      return ['4', '8'];
      break;
    case '8':
      return ['0', '5', '7', '9'];
      break;
    case '9':
      return ['6', '8'];
      break;
    }
  }

  let result = observed
    .split('')
    .map(number => [number, ...adjacents(number)])
    .reduce((a, b) => a.flatMap(x => b.map(y => x + y)), [''])

  return result
  }