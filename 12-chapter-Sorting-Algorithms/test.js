const {sort} = require('./sort-module')

const nsTime = (hrtime) => hrtime[0] * 1e9 + hrtime[1]

function setData (numElements = 100) {
  let dataStore = []
  for (let i = 0; i < numElements; i++) {
    dataStore[i] = Math.floor(Math.random() * (numElements + 1))
  }
  return dataStore
}

let basic = 50

test (`bubbleSort test with ${basic} elements`, assert => {
  let start = process.hrtime()
  let dataStore = setData(basic)
  let sorted = sort(dataStore).bubbleSort()
  let end = process.hrtime(start)

  assert.equal(dataStore.sort(), sorted, `Elapsed time on ${basic} elements is: ${nsTime(end) / 1e9} seconds.`)
})

test (`selectionSort test with ${basic} elements`, assert => {
  let start = process.hrtime()
  let dataStore = setData(basic)
  let sorted = sort(dataStore).selectionSort()
  let end = process.hrtime(start)

  assert.equal(dataStore.sort(), sorted, `Elapsed time on ${basic} elements is: ${nsTime(end) / 1e9} seconds.`)
})

test (`insertionSort test with ${basic} elements`, assert => {
  let start = process.hrtime()
  let dataStore = setData(basic)
  let sorted = sort(dataStore).insertionSort()
  let end = process.hrtime(start)

  assert.equal(dataStore.sort(), sorted, `Elapsed time on ${basic} elements is: ${nsTime(end) / 1e9} seconds.`)
})

let advance = 1000

test (`mergeSort test with ${advance} elements`, assert => {
  let start = process.hrtime()
  let dataStore = setData(advance)
  let sorted = sort(dataStore).mergeSort()
  let end = process.hrtime(start)

  assert.equal(dataStore.sort(), sorted, `Elapsed time on ${advance} elements is: ${nsTime(end) / 1e9} seconds.`)
})

test (`quickSort test with ${advance} elements`, assert => {
  let start = process.hrtime()
  let dataStore = setData(advance)
  let sorted = sort(dataStore).quickSort()
  let end = process.hrtime(start)

  assert.equal(dataStore.sort(), sorted, `Elapsed time on ${advance} elements is: ${nsTime(end) / 1e9} seconds.`)
})
