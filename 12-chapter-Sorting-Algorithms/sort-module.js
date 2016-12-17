(function (exports) {
  const {quickSort: quickMethod} = require('./quick-sort.module')
  const {mergeSort: mergeMethod} = require('./merge-sort.module')
  const {bubbleSort, selectionSort, insertionSort} = require('./basic-sort')

  let alist

  const display = () => console.log(alist)

  const getData = () => alist

  function swap (v1, v2) {
    const temp = alist[v1]
    alist[v1] = alist[v2]
    alist[v2] = temp
  }

  const methods = {
    bubbleSort () {
      alist = bubbleSort.sort(alist, swap)
      return this.getData()
    },
    selectionSort () {
      alist = selectionSort.sort(alist, swap)
      return this.getData()
    },
    insertionSort () {
      alist = insertionSort.sort(alist)
      return this.getData()
    },
    quickSort () {
      alist = quickMethod.sort(alist, swap)
      return this.getData()
    },
    mergeSort () {
      alist = mergeMethod.sort(alist)
      return this.getData()
    },
    getData,
    display
  }

  exports.sort = function sort (args) {
    alist = args
    Object.assign(this, methods)
    return this
  }
}((typeof module.exports !== undefined) ? module.exports : window))
