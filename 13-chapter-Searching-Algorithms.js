class Search {

  static sequentialSearch(dataStore, data) {
    for (var i = 0; i < dataStore.length; i++) {
      if (dataStore[i] === data) {
        return i;
      }
    }
    return -1;
  }

  static binarySearch(dataStore, data) {
    let upperBound = dataStore.length - 1;
    let lowerBound = 0;
    while (lowerBound <= upperBound) {
      let mid = Math.floor((lowerBound + upperBound) / 2);
      if(dataStore[mid] < data) {
        lowerBound = mid + 1;
      } else if(dataStore[mid] > data) {
        upperBound = mid - 1;
      } else {
        return mid;
      }
    }
    return - 1;
  }

  static countOccurrences(dataStore, data) {
    let count = 0;
    let position = this.binarySearch(dataStore, data);
    if(position > -1) {
      count += 1;
      for (var i = position; i > 0; i--) {
        if(dataStore[i] === data) {
          count += 1;
        } else {
          break;
        }
      }
      for (var i = position + 1; i < dataStore.length; i++) {
        if (dataStore[i] === data) {
          count += 1;
        } else {
          break;
        }
      }
    }
    return count;
  }

  static minValue(dataStore) {
    let min = dataStore[0];
    for (var i = 1; i < dataStore.length; i++) {
      if (dataStore[i] < min) {
        min = dataStore[i];
      }
    }
    return min;
  }

  static maxValue(dataStore) {
    let max = dataStore[0];
    for (var i = 1; i < dataStore.length; i++) {
      if (dataStore[i] > max) {
        max = dataStore[i];
      }
    }
    return max;
  }

}

function setData(numElements = 100) {
  let dataStore = [];
  for (let i = 0; i < numElements; i++) {
    dataStore[i] = Math.floor(Math.random() * (numElements + 1));
  }
  return dataStore;
}

function insertionSort(dataStore) {
  let temp, inner;
  for (let outer = 1; outer <= dataStore.length-1; outer++) {
    temp = dataStore[outer];
    inner = outer;
    while (inner > 0 && (dataStore[inner-1] >= temp)) {
       dataStore[inner] = dataStore[inner-1];
       --inner;
    }
    dataStore[inner] = temp;
  }
}

// Implementation
// ##########################################################################
const fs = require('fs');

function readMyData(file) {
  let data     = file.split(' ');
  const word   = 'rhetoric';
  let start    = new Date().getTime();
  let position = Search.sequentialSearch(data, word);
  let end      = new Date().getTime();
  console.log((position > 0) ? `${word} is present in the set and is in the position ${position}` : `${word} is not present in the set`);
  console.log(`Sequential search took ${end - start} milliseconds.`);
  console.log();

  insertionSort(data);
  start    = new Date().getTime();
  position = Search.binarySearch(data, word);
  end      = new Date().getTime();
  console.log((position > 0) ? `${word} is present in the set and is in the position ${position}` : `${word} is not present in the set`);
  console.log(`Binary search took ${end - start} milliseconds.`);
}

const number    = 11;
let dataStore   = setData();
const result    = Search.sequentialSearch(dataStore, number);
console.log((result > 0) ? `${number} is present in the set and is in the position ${result}` : `${number} is not present in the set`);
console.log();
console.log(`The minimum value is: ${Search.minValue(dataStore)}`);
console.log(`The maximum value is: ${Search.maxValue(dataStore)}`);
console.log();
insertionSort(dataStore);
const resBin  = Search.binarySearch(dataStore, number);
const count   = Search.countOccurrences(dataStore, number);
const present = `${number} is present in the set and is in the position ${resBin} and has ${count} occurrences`;
console.log((resBin > 0) ? present : `${number} is not present in the set`);
console.log();

fs.readFile('paragraph.txt', 'utf8', (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error('myfile does not exist');
      return;
    } else {
      throw err;
    }
  }
  readMyData(data);
});
