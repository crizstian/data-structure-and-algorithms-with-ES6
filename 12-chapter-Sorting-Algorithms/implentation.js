const BasicSorting   = require('./12-chapter-basic-sorting-algorithms');
const AdvanceSoritng = require('./12-chapter-advance-sorting-algorithms');

function setData(numElements = 100) {
  let dataStore = [];
  for (let i = 0; i < numElements; i++) {
    dataStore[i] = Math.floor(Math.random() * (numElements + 1));
  }
  return dataStore;
}

function evaluteSortingAlgorithms(dataStore, typeSort) {
  console.log(typeSort);
  let start = new Date().getTime();

  switch (typeSort) {
    case 'Bubble Sort':
      BasicSorting.bubbleSort(dataStore);
    break;
    case 'Selection Sort':
      BasicSorting.selectionSort(dataStore);
    break;
    case 'Insertion Sort':
      BasicSorting.insertionSort(dataStore);
    break;
    case 'Merge Sort':
      AdvanceSoritng.mergeSort(dataStore);
    break;
    case 'Quick Sort':
      AdvanceSoritng.quickSort(dataStore);
    break;
    default:
      dataStore.sort();
  }

  let end = new Date().getTime();
  console.log(`Elapsed time for the ${typeSort} on ${numElements} elements is: ${end} - ${start} = ${end - start} milliseconds.`);
  console.log('###################');
}

const numElements = 10000;
const sortTypes   = [
  'Bubble Sort',
  'Selection Sort',
  'Insertion Sort',
  'Quick Sort',
  'Merge Sort',
  'Default JS Sort'
];

sortTypes.forEach(type => evaluteSortingAlgorithms(setData(numElements), type));
