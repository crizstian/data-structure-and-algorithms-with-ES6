const {graph} = require('./graph.module')

test('Graph Data Structure', assert => {
  const devBook = Object.create(graph())

  devBook.addVertex('James Gosling')
  devBook.addVertex('Guido Rossum')
  devBook.addVertex('Linus Torvalds')
  devBook.addVertex('Cristian Ramirez')

  assert.equal(!!devBook.getVertex('Linus Torvalds'), true, 'adds vertex')

  devBook.addEdge('James Gosling', 'Guido Rossum')
  devBook.addEdge('James Gosling', 'Cristian Ramirez')
  devBook.addEdge('Linus Torvalds', 'Cristian Ramirez')

  assert.equal(devBook.getVertex('Linus Torvalds').edges['Cristian Ramirez'], true, 'adds edges')

  devBook.removeEdge('Linus Torvalds', 'Cristian Ramirez')

  assert.equal(!!devBook.getVertex('Linus Torvalds').edges['Cristian Ramirez'], false, 'removes an edge')

  devBook.removeVertex('Linus Torvalds')

  assert.equal(devBook.getVertex('Linus Torvalds'), false, 'removes a vertex')

  assert.ok(devBook.hasEdge('James Gosling', 'Guido Rossum'), 'verify has edge')

  devBook.showGraph()

  console.log(JSON.stringify(devBook.getGraph(), null, 2))

  devBook.showVertexs()

  // devBook.showVertex('James Gosling')

  const vertex = devBook.getVertex('Cristian Ramirez')

  assert.equal(vertex, devBook.getVertex('Cristian Ramirez'), 'get vertex object')
})
