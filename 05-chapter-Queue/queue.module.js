(function (exports) {
  const queue = (data = []) => {
    let dataStore = data

    const queueProto = {
      enqueue: (element) => dataStore.push(element),
      dequeue: () => dataStore.shift(),
      front: () => dataStore[0],
      back: () => dataStore[dataStore.length - 1],
      isEmpty: () => dataStore.length === 0,
      length: () => dataStore.length,
      getQueue: () => dataStore,
      setQueue: (data) => {
        dataStore = data
      },
      toString: () => JSON.stringify(dataStore, null, 2)
    }

    return Object.create(queueProto)
  }

  Object.assign(exports, {queue})
}((typeof module.exports !== undefined) ? module.exports : window))
