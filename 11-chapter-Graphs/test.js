const {graph} = require('./graph.module')

test('Graph Data Structure', assert => {
  const devBook = Object.create(graph())
  const devBook2 = Object.create(graph())

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

  devBook.search(devBook.getGraph()).dfs()

  devBook2.addVertex('S')
  devBook2.addVertex('A')
  devBook2.addVertex('B')
  devBook2.addVertex('C')
  devBook2.addVertex('D')
  devBook2.addEdge('S', 'A')
  devBook2.addEdge('S', 'B')
  devBook2.addEdge('S', 'C')
  devBook2.addEdge('A', 'D')
  devBook2.addEdge('B', 'D')
  devBook2.addEdge('C', 'D')

  console.log('BFS() search...')

  devBook2.search(devBook2.getGraph()).bfs()
})
