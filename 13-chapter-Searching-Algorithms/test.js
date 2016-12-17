const {search} = require('./index')
const {sort} = require('../12-chapter-Sorting-Algorithms/')
const fs = require('fs')

const nsTime = (hrtime) => hrtime[0] * 1e9 + hrtime[1]

const setData = (numElements = 100) => {
  let dataStore = []
  for (let i = 0; i < numElements; i++) {
    dataStore[i] = Math.floor(Math.random() * (numElements + 1))
  }
  return dataStore
}

test ('Binary and Sequential search on array of numbers', assert => {
  let dataStore = setData()
  let number = 11
  let result = search.sequentialSearch(dataStore, number)
  assert.ok(result, (result >= 0) ? `${number} is present in the set and is in the position ${result}` : 'not generated number')
  assert.ok(search.minValue, `The minimum value is: ${search.minValue(dataStore)}`)
  assert.ok(search.maxValue, `The maximum value is: ${search.maxValue(dataStore)}`)
  dataStore = sort(dataStore).insertionSort()
  result = search.binarySearch(dataStore, number)
  const count = search.countOccurrences(dataStore, number)
  assert.ok((result), (result >= 0) ? `${number} is present in the set and is in the position ${result} and has ${count} occurrences` : 'not generated number')
})

test ('Binary and Sequential search on text file', assert => {
  let data = fs.readFileSync('./13-chapter-Searching-Algorithms/paragraph.txt', 'utf8')
    .trim()
    .split(' ')

  const word = 'rhetoric'
  let start = process.hrtime()
  let position = search.sequentialSearch(data, word)
  let end = process.hrtime(start)

  assert.ok(position, `${word} is present in the set and is in the position ${position}`)
  assert.ok(position, `Sequential search took ${nsTime(end) / 1e9} milliseconds.`)

  data = sort(data).insertionSort()
  start = process.hrtime()
  position = search.binarySearch(data, word)
  end = process.hrtime(start)

  assert.ok((position >= 0), `${word} is present in the set and is in the position ${position}`)
  assert.ok(position, `Binary search took ${nsTime(end) / 1e9} milliseconds.`)
})
