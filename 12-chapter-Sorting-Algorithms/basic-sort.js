(function (exports) {
  let alist, swap

  function bubbleSort () {
    const numElements = alist.length
    for (let outer = numElements; outer >= 2; outer--) {
      for (let inner = 0; inner <= outer - 1; inner++) {
        if (alist[inner] > alist[inner + 1]) {
          swap(inner, inner + 1)
        }
      }
    }
  }

  function selectionSort () {
    let min
    for (let outer = 0; outer <= alist.length - 2; outer++) {
      min = outer
      for (let inner = outer + 1; inner <= alist.length - 1; inner++) {
        if (alist[inner] < alist[min]) {
          min = inner
        }
      }
      swap(outer, min)
    }
  }

  function insertionSort () {
    let temp
    let inner

    for (let outer = 1; outer <= alist.length - 1; outer++) {
      temp = alist[outer]
      inner = outer
      while (inner > 0 && (alist[inner - 1] >= temp)) {
        alist[inner] = alist[inner - 1]
        --inner
      }
      alist[inner] = temp
    }
  }

  const bubbleObject = {
    sort (args) {
      swap = [].slice.call(arguments, 1)[0]
      alist = args
      bubbleSort(0, alist.length - 1)
      return alist
    }
  }

  const selectionObject = {
    sort (...args) {
      alist = args[0]
      swap = args[1]
      selectionSort(0, alist.length - 1)
      return alist
    }
  }

  const insertionObject = {
    sort (args) {
      alist = args
      insertionSort(0, alist.length - 1)
      return alist
    }
  }

  Object.assign(
    exports,
    {bubbleSort: bubbleObject},
    {selectionSort: selectionObject},
    {insertionSort: insertionObject}
  )
}((typeof module.exports !== undefined) ? module.exports : window))
