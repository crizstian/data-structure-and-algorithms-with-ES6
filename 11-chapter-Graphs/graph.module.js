(function (exports) {
  const {bfs, dfs} = require('./graph.search')

  const graphFactory = () => {
    let graph = {}
    let vertices = 0

    const graphProto = {
      contains: (node) => !!graph[node],
      hasEdge: (nodeOne, nodeTwo) => {
        if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
          return !!graph[nodeOne].edges[nodeTwo]
        }
      },
      addVertex: (node) => {
        if (!graphProto.contains(node)) {
          graph[node] = {edges: {}, visited: false}
          vertices += 1
        }
      },
      removeVertex: (node) => {
        if (graphProto.contains(node)) {
          for (let item in graph[node].edges) {
            if (graph[node].edges.hasOwnProperty(item)) {
              graph.removeEdge(node, item)
            }
          }
          vertices -= 1
          delete graph[node]
        }
      },
      addEdge: (nodeOne, nodeTwo) => {
        if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
          graph[nodeOne].edges[nodeTwo] = true
          graph[nodeTwo].edges[nodeOne] = true
        }
      },
      removeEdge: (nodeOne, nodeTwo) => {
        if (graphProto.contains(nodeOne) && graphProto.contains(nodeTwo)) {
          delete graph[nodeOne].edges[nodeTwo]
          delete graph[nodeTwo].edges[nodeOne]
        }
      },
      showGraph: () => {
        let show = ''
        for (let v in graph) {
          show += `${v} -> `
          for (let n in graph[v].edges) {
            show += n + ', '
          }
          show += '\n'
        }
        console.log(show)
      },
      showVertex: (node) => console.log(graphProto.getVertex(node)),
      showVertexs: () => console.log(Object.keys(graph)),
      getGraph: () => graph,
      getVertex: (node) => (graphProto.contains(node)) ? graph[node] : false,
      getNumVertices: () => vertices
    }

    Object.assign(graphProto, {bfs: bfs.bind(graphProto), dfs: dfs.bind(graphProto)})

    return Object.create(graphProto)
  }

  Object.assign(exports, {graph: graphFactory})
}((typeof module.exports !== undefined) ? module.exports : window))
