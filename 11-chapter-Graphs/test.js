const {graph} = require('./graph.module')

test('Graph Data Structure', assert => {
  const devBook = graph()
  const devBook2 = graph()

  devBook.addVertex('S')
  devBook.addVertex('A')
  devBook.addVertex('B')
  devBook.addVertex('C')
  devBook.addVertex('D')
  devBook.addVertex('E')

  assert.equal(!!devBook.getVertex('A'), true, 'adds vertex')

  devBook.addEdge('S', 'A')
  devBook.addEdge('S', 'B')
  devBook.addEdge('S', 'C')
  devBook.addEdge('A', 'D')
  devBook.addEdge('B', 'D')
  devBook.addEdge('C', 'D')
  devBook.addEdge('A', 'E')

  const vertex = devBook.getVertex('A')

  assert.equal(vertex, devBook.getVertex('A'), 'get vertex object')

  assert.equal(devBook.getVertex('C').edges['D'], true, 'adds edges')

  devBook.removeEdge('A', 'E')

  assert.equal(!!devBook.getVertex('A').edges['E'], false, 'removes an edge')

  devBook.removeVertex('E')

  assert.equal(devBook.getVertex('E'), false, 'removes a vertex')

  assert.ok(devBook.hasEdge('B', 'D'), 'verify has edge')

  devBook.showGraph()

  devBook.showVertexs()

  console.log('DFS() search...')

  devBook.dfs()

  console.log('BFS() search...')

  devBook.bfs()

  devBook2.addVertex('F')
  devBook2.addVertex('G')
  devBook2.addVertex('H')
  devBook2.addVertex('I')
  devBook2.addVertex('J')
  devBook2.addEdge('F', 'G')
  devBook2.addEdge('F', 'H')
  devBook2.addEdge('F', 'I')
  devBook2.addEdge('G', 'J')
  devBook2.addEdge('H', 'J')
  devBook2.addEdge('I', 'J')

  devBook2.showGraph()

  devBook2.showVertexs()

  console.log('DFS() search...')

  devBook2.dfs()

  console.log('BFS() search...')

  devBook2.bfs()
})
