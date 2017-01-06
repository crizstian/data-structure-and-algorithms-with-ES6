(function (exports) {
  const {stack} = require('./04-chapter-Stack/')
  const {queue} = require('./05-chapter-Queue/')
  const {linked} = require('./06-chapter-Linked-Lists-types/')
  const {tree} = require('./10-chapter-Binary-Tree/')
  const {graph} = require('./11-chapter-Graphs/')
  const {sort} = require('./12-chapter-Sorting-Algorithms/')
  const {search} = require('./13-chapter-Searching-Algorithms/')

  Object.assign(exports, {stack, queue, linked, tree, graph, sort, search})
}((typeof module.exports !== undefined) ? module.exports : window))
