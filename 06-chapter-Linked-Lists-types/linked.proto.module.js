(function (exports) {
  const node = (data) => {
    const double = [].slice.call(arguments, 1)[0]
    const nodeProto = {
      data: 'data',
      next: null
    }
    if (double === 'double') {
      nodeProto.prev = null
    }
    return Object.assign(Object.create(nodeProto), {data})
  }

  // Helper functions
  const curry = fn => (...args) => fn.bind(null, ...args)
  const compose = (...fns) => data => fns.reduce((v, f) => f(v), data)

  // Factory function
  const linked = (type) => {

    const link = {}
    // private variables
    let head = null
    let current = null
    let length = 0

    // single responsability
    const setHead = (data) => {
      head = data
      return head
    }
    const setHead2 = (data) => {
      head = data
      head.next = head
      return head
    }
    const setCurrent = (data) => {
      current = data
      return current
    }
    const setLength = (type) => {
      length += (type) ? 1 : -1
    }

    // Pure functions
    const setNext = curry((value, data) => {
      value.next = data
      return data
    })
    const setPrev = curry((value, data) => {
      if (data !== null) {
        data.prev = value
      }
      return data
    })
    const setNext2 = curry((value, data) => {
      if(data.next === null) {
        value.next = head
      }
      value.next = data
      return data
    })
    const setPrev2 = curry((value, data) => {
      if (data === null) {
        data = head
      } else {
        data.prev = value
      }
      return data
    })

    // linked list functions
    const findPrev = (data) => {
      let c = head
      while (!(c.next === null)) {
        if (c.next.data === data) {
          return c
        } else {
          c = c.next
        }
      }
      return false
    }

    const add = (data) => {
      let args = (!head && !current) ? [setHead] : [setNext(current)]
      compose(...args, setCurrent, setLength)(node(data))
    }

    const add2 = (data) => {
      let args = (!head && !current) ? [setHead] : [setNext(current), setPrev(current)]
      compose(...args, setCurrent, setLength)(node(data))
    }

    const add3 = (data) => {
      let args = (!head && !current) ? [setHead2] : [setNext2(current), setPrev2(current)]
      compose(...args, setCurrent, setLength)(node(data))
    }

    const remove = (data) => {
      let prev = findPrev(data)
      if (!(prev.next === null)) {
        compose(setCurrent, setNext(prev))(prev.next.next)
      }
      setLength(false)
    }

    const remove2 = (data) => {
      let prev = findPrev(data)
      if (!(prev.next === null)) {
        compose(setPrev(prev),setNext(prev), setCurrent)(prev.next.next)
      }
      setLength(false)
    }

    const remove3 = (data) => {
      let prev = findPrev(data)
      if (!(prev.next === null)) {
        compose(setPrev2(prev),setNext2(prev), setCurrent)(prev.next.next)
      }
      setLength(false)
    }

    link.contains = (data) => {
      let c = head
      while (!(c === null)) {
        if (c.data === data) {
          return true
        }
        c = c.next
      }
      return false
    }

    const display = () => {
      let c = head
      let show = ''
      while (!(c === null)) {
        show += `${c.data} ${(c.next !== null) ? ' ->' : ''} `
        c = c.next
      }
      return show
    }

    const display2 = () => {
      let c = head
      let show = `${c.data} -> `
      while (!(c.next.data === head.data)) {
        show += `${c.next.data} ${(c.data !== head.data) ? ' ->' : ''} `
        c = c.next
      }
      return show
    }

    link.getCurrent = () => current
    link.getList = () => head
    link.size = () => length

    // object prototype
    const list = Object.create(link)

    if (type === 'single') {
      Object.assign(list, {add, display, remove})
    } else if (type === 'double') {
      Object.assign(list, {add: add2, display, remove: remove2})
    } else {
      Object.assign(list, {add: add3, display: display2, remove: remove3})
    }

    return list
  }

  Object.assign(exports, {linked})
}((typeof module.exports !== undefined) ? module.exports : window))
