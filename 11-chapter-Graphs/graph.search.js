(function (exports) {
  const {stack} = require('../04-chapter-Stack/')
  let graph
  let listOfVertices
  let keys
  let graphStack

  const getUnvistedVertex = (vertex) => {
    for (let i = 0; i < listOfVertices.length; i++) {
      if (listOfVertices[i] === false) {
        return
      }
    }
  }

  const dfs = () => {
    graph.showVertex(keys[0])
    listOfVertices[0] = true
    graphStack.push(keys[0])

    while (!graphStack.isEmpty()) {
      let unvistedVertex = getUnvistedVertex(graphStack.peek())
    }
  }

  const searchFactory = (g) => {
    graph = Object.create(g)
    listOfVertices = new Array(graph.getNumVertices())
    keys = Object.keys(graph)
    graphStack = stack()
    return {
      dfs
    }
  }

  Object.assign(exports, {search: searchFactory})
}((typeof module.exports !== undefined) ? module.exports : window))
