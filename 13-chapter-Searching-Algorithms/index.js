(function (exports) {
  const search = require('./search-module')
  Object.assign(exports, {search})
}((typeof module.exports !== undefined) ? module.exports : window))
