const {sort} = require('./sort-module')

const nsTime = (hrtime) => hrtime[0] * 1e9 + hrtime[1]

function setData (numElements = 100) {
  let dataStore = []
  for (let i = 0; i < numElements; i++) {
    dataStore[i] = Math.floor(Math.random() * (numElements + 1))
  }
  return dataStore
}

function evaluteSortingAlgorithms (dataStore, typeSort) {
  let start = process.hrtime()

  switch (typeSort) {
    case 'Bubble Sort':
      sort(dataStore).bubbleSort()
      break
    case 'Selection Sort':
      sort(dataStore).selectionSort()
      break
    case 'Insertion Sort':
      sort(dataStore).insertionSort()
      break
    case 'Merge Sort':
      sort(dataStore).mergeSort()
      break
    case 'Quick Sort':
      sort(dataStore).quickSort()
      break
    default:
      dataStore.sort()
  }

  let end = process.hrtime(start)
  console.log(`Elapsed time for the ${typeSort} on ${numElements} elements is: ${nsTime(end) / 1e9} nanoseconds.`)
  console.log('\n')
}

const numElements = 40
const sortTypes = [
  'Bubble Sort',
  'Selection Sort',
  'Insertion Sort',
  'Quick Sort',
  'Merge Sort',
  'Default JS Sort'
]

sortTypes.forEach(type => evaluteSortingAlgorithms(setData(numElements), type))
