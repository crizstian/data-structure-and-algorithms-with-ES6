(function (exports) {
  const graphFactory = () => {
    let graph = {}
    let graphProto = {}
    let vertices = 0

    graphProto.contains = (node) => !!graph[node]

    graphProto.hasEdge = (nodeOne, nodeTwo) => {
      if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
        return !!graph[nodeOne].edges[nodeTwo]
      }
    }

    graphProto.addVertex = (node) => {
      if (!graphProto.contains(node)) {
        graph[node] = {edges: {}, visited: false}
        vertices += 1
      }
    }

    graphProto.removeVertex = (node) => {
      if (graphProto.contains(node)) {
        for (let item in graph[node].edges) {
          if (graph[node].edges.hasOwnProperty(item)) {
            graph.removeEdge(node, item)
          }
        }
        vertices -= 1
        delete graph[node]
      }
    }

    graphProto.addEdge = (nodeOne, nodeTwo) => {
      if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
        graph[nodeOne].edges[nodeTwo] = true
        graph[nodeTwo].edges[nodeOne] = true
      }
    }

    graphProto.removeEdge = (nodeOne, nodeTwo) => {
      if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
        delete graph[nodeOne].edges[nodeTwo]
        delete graph[nodeTwo].edges[nodeOne]
      }
    }

    graphProto.showGraph = () => {
      let show = ''
      for (let v in graph) {
        show += `${v} -> `
        for (let n in graph[v].edges) {
          show += n + ', '
        }
        show += '\n'
      }
      console.log(show)
    }

    graphProto.showVertex = (node) => console.log(graphProto.getVertex(node))

    graphProto.showVertexs = () => {
      const vertexs = Object.keys(graph)
      console.log('Vertexs of the graph')
      vertexs.forEach(node => console.log(node))
    }

    graphProto.getGraph = () => graph

    graphProto.getVertex = (node) => (graphProto.contains(node)) ? graph[node] : false

    graphProto.getNumVertices = () => vertices

    return graphProto
  }

  Object.assign(exports, {graph: graphFactory})
}((typeof module.exports !== undefined) ? module.exports : window))
