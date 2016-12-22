(function (exports) {
  const node = (element = 'Head', next = null) => {
    const o = {
      element,
      next
    }
    return Object.assign(Object.create(o), {element, next})
  }

  const linkedList = (h = null, c = null, l = 0) => {
    const list = {}
    let head = h
    let current = c
    let length = l

    const findPrevious = (item) => {
      let currNode = getHead()
      while (!(currNode.next === null) && currNode.next.element !== item) {
        currNode = currNode.next
      }
      return currNode
    }

    const getHead = () => head

    list.contains = (item) => {
      let node = getHead()
      while (node) {
        if (node.element === item) {
          return true
        }
        node = node.next
      }
      return false
    }

    list.add = (element) => {
      const newNode = node(element)
      if (!head && !current) {
        head = newNode
        current = head
      } else {
        current.next = newNode
        current = current.next
      }
      length += 1
    }

    list.remove = (item) => {
      let prevNode = findPrevious(item)
      if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next
        current = prevNode.next
      }
      length -= 1
    }

    list.display = () => {
      let currNode = head
      let show = currNode.element + ' -> '
      while (!(currNode.next === null)) {
        show += currNode.next.element + ' -> '
        currNode = currNode.next
      }
      show += 'end'
      console.log(show)
    }

    list.advance = (n) => {
      let position = n
      while (!(current.next === null)) {
        if (n-- > 0) {
          current = current.next
        } else if (current.next === null) {
          console.log(`Can't advanced ${position} position in the list`)
          break
        } else {
          break
        }
      }
    }

    list.show = () => current.element

    list.size = () => length

    return Object.create(list)
  }

  Object.assign(exports, {linkedList})
}((typeof module.exports !== 'undefined') ? module.exports : window))
