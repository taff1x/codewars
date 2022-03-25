https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// List Filtering

function filter_list(l) {
    const regExp = /^[0-9]+$/
    return l.filter((elem) => typeof elem === "number" && regExp.test(elem));
}

