function solution(list) {
    let memory;
    const reducedList = list.sort((a,b) => a-b).reduce(
        (previousValue, currentValue, currentIndex, array) => {
          if (currentValue === array[currentIndex-1] + 1 && currentValue === array[currentIndex-2] + 2 ||
              currentValue === array[currentIndex-1] + 1 && currentValue === array[currentIndex+1] - 1) {
            if (currentIndex === array.length-1) return currentValue === memory+1 ? [...previousValue, currentValue] : [...previousValue, memory, currentValue];
            memory = currentValue;
            return previousValue[previousValue.length-1] === "-" ? previousValue : [...previousValue, "-"];
          }
          return previousValue[previousValue.length-1] === "-" ? [...previousValue, memory, currentValue] : [...previousValue, currentValue];
        }, []);
    return reducedList.toString().replace(/,-,/g,'-')
  }