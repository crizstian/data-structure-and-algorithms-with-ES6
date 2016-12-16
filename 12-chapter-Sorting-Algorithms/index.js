(function (exports) {
  const {sort} = require('./sort-module')
  Object.assign(exports, sort)
}((typeof module.exports !== undefined) ? module.exports : window))
