(function (exports) {
  let dataStore
  let top

  const stackFactory = (data = [], t = -1) => {
    let stackProto = {}
    dataStore = data
    top = t

    stackProto.push = (element) => {
      dataStore[top++] = element
    }

    stackProto.pop = () => {
      dataStore.splice(--top, 1)
    }

    stackProto.peek = () => dataStore[top - 1]

    stackProto.length = () => top

    stackProto.isEmpty = () => top === -1
  }

  Object.assign(exports, {stack: stackFactory})
}((typeof module.exports !== undefined) ? module.exports : window))
