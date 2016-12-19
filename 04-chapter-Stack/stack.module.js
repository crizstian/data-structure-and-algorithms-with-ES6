(function (exports) {
  const stack = (data = [], t = 0) => {
    let dataStore = data
    let top = t

    const stackProto = {
      push (element) {
        dataStore[top++] = element
      },
      pop: () => dataStore.splice(--top, 1),
      peek: () => dataStore[top - 1],
      length: () => top,
      isEmpty: () => top === 0,
      getStack: () => dataStore
    }

    return Object.create(stackProto)
  }

  Object.assign(exports, {stack})
}((typeof module.exports !== undefined) ? module.exports : window))
