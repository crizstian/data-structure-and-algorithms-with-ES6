(function (exports) {
  let alist

  function mergeSort () {
    if (alist.length < 2) {
      return
    }

    let left, right
    let step = 1

    while (step < alist.length) {
      left = 0
      right = step
      while (right + step <= alist.length) {
        mergeArrays(left, left + step, right, right + step)
        left = right + step
        right = left + step
      }
      if (right < alist.length) {
        mergeArrays(left, left + step, right, alist.length)
      }
      step *= 2
    }
  }

  function mergeArrays (startLeft, stopLeft, startRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1)
    let leftArr = new Array(stopLeft - startLeft + 1)
    let k = startRight
    let m = 0
    let n = 0

    for (let i = 0; i < rightArr.length - 1; i++) {
      rightArr[i] = alist[k]
      ++k
    }

    k = startLeft
    for (let i = 0; i < leftArr.length - 1; i++) {
      leftArr[i] = alist[k]
      k++
    }

    rightArr[rightArr.length - 1] = Infinity // a sentinel value
    leftArr[leftArr.length - 1] = Infinity // a sentinel value

    for (k = startLeft; k < stopRight; k++) {
      if (leftArr[m] <= rightArr[n]) {
        alist[k] = leftArr[m]
        m++
      } else {
        alist[k] = rightArr[n]
        n++
      }
    }
  }

  const mergeObject = {
    sort (args) {
      alist = args
      mergeSort()
      return alist
    }
  }

  Object.assign(exports, {mergeSort: mergeObject})
}((typeof module.exports !== undefined) ? module.exports : window))
