const {graph} = require('./graph.module')

test('Graph Data Structure', assert => {
  const devBook = Object.create(graph())

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
})
