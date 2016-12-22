(function (exports) {
  const {linkedList} = require('./linked-list.module')
  // const {doubleLinked} = require('./double-linked-list.module')
  // const {circularLinked} = require('./circular-linked-list.module')

  Object.assign(exports, {linkedList})
}((typeof module.exports !== 'undefined') ? module.exports : window))
