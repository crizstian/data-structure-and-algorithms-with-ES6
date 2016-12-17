(function (exports) {
  const sequentialSearch = (dataStore, data) => {
    for (var i = 0; i < dataStore.length; i++) {
      if (dataStore[i] === data) {
        return i
      }
    }
    return -1
  }

  const binarySearch = (dataStore, data) => {
    let upperBound = dataStore.length - 1
    let lowerBound = 0
    while (lowerBound <= upperBound) {
      let mid = Math.floor((lowerBound + upperBound) / 2)
      if (dataStore[mid] < data) {
        lowerBound = mid + 1
      } else if (dataStore[mid] > data) {
        upperBound = mid - 1
      } else {
        return mid
      }
    }
    return -1
  }

  const countOccurrences = (dataStore, data) => {
    let count = 0
    let position = binarySearch(dataStore, data)
    if (position > -1) {
      count += 1
      for (let i = position; i > 0; i--) {
        if (dataStore[i] === data) {
          count += 1
        } else {
          break
        }
      }
      for (let i = position + 1; i < dataStore.length; i++) {
        if (dataStore[i] === data) {
          count += 1
        } else {
          break
        }
      }
    }
    return count
  }

  const minValue = (dataStore) => {
    let min = dataStore[0]
    for (var i = 1; i < dataStore.length; i++) {
      if (dataStore[i] < min) {
        min = dataStore[i]
      }
    }
    return min
  }

  const maxValue = (dataStore) => {
    let max = dataStore[0]
    for (var i = 1; i < dataStore.length; i++) {
      if (dataStore[i] > max) {
        max = dataStore[i]
      }
    }
    return max
  }

  Object.assign(exports, {sequentialSearch, binarySearch, minValue, maxValue, countOccurrences})
}((typeof module.exports !== undefined) ? module.exports : window))
