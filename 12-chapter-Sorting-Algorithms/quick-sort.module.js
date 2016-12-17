(function (exports) {
  let alist, swap

  function quickSortHelper (left, right) {
    if (right - left <= 0) {
      return
    } else {
      const pivot = alist[right]
      const splitPoint = partition(left, right, pivot)
      quickSortHelper(left, splitPoint - 1)
      quickSortHelper(splitPoint + 1, right)
    }
  }

  function partition (left, right, pivot) {
    let leftmark = left - 1
    let rightmark = right

    while (true) {
      while (alist[++leftmark] < pivot) {}
      while (rightmark > 0 && alist[--rightmark] > pivot) {}
      if (rightmark <= leftmark) {
        break
      } else {
        swap(leftmark, rightmark)
      }
    }

    swap(leftmark, right)
    return leftmark
  }

  const quickObject = {
    sort (...args) {
      alist = args[0]
      swap = args[1]
      quickSortHelper(0, alist.length - 1)
      return alist
    }
  }

  Object.assign(exports, {quickSort: quickObject})
}((typeof module.exports !== undefined) ? module.exports : window))
