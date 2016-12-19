const {queue} = require('./index')

test('Queue test 1', assert => {
  const patient = (name = 'generic', code = '0') => Object.assign({}, {name, code})

  const ed = queue()
  const p = patient('Smith', 5)
  ed.enqueue(p)
  const p2 = patient('Jones', 4)
  ed.enqueue(p2)
  const p3 = patient('Fehrenbach', 6)
  ed.enqueue(p3)
  const p4 = patient('Brown', 1)
  ed.enqueue(p4)
  const p5 = patient('Ingram', 1)
  ed.enqueue(p5)

  const dequeue = function () {
    let priority = this.front().code
    let position = 0
    let dataStore = this.getQueue()
    for (let i = 0; i < this.length(); i++) {
      if (dataStore[i].code >= priority) {
        priority = dataStore[i].code
        position = i
      }
    }
    return dataStore.splice(position, 1)
  }

  Object.assign(ed, {dequeue})

  let seen = []

  while (ed.length() > 0) {
    let {name} = ed.dequeue()[0]
    seen.push(name)
    // console.log('\nPatient being treated: ' + seen[seen.length - 1])
  }

  assert.equal(seen[0], 'Fehrenbach', 'dequeue fn override and dequeue by code')
})

test('Queue test 2', assert => {
  function isPalindrome (word) {
    const letter = new RegExp('[a-z]')
    let palindrome = word.toLowerCase().split('')
    let a, b
    palindrome = palindrome.filter(item => letter.test(item))
    const q = queue(palindrome)

    const dequeueBack = function (element) {
      const dataStore = this.getQueue()
      const data = dataStore.unshift(element)
      this.setQueue(data)
      return data
    }

    Object.assign(q, {dequeueBack})

    while (!q.isEmpty()) {
      if (q.length() > 1) {
        a = q.front()
        b = q.back()
      } else {
        // console.log(`The string '${word.toUpperCase()}' is palindrome!`)
        return true
      }
      if (a === b && q.length() > 1) {
        q.dequeue()
        q.dequeueBack()
      } else {
        // console.log(`The string '${word.toUpperCase()}' is not palindrome!`)
        return false
      }
    }
  }

  const word = 'racecar'
  const word2 = 'A man, a plan, a canal: Panama'
  const word3 = 'what is this'

  assert.equal(true, isPalindrome(word), `the string = '${word}' is palindrome`)
  assert.equal(true, isPalindrome(word2), `the string = '${word2}' is palindrome`)
  assert.equal(false, isPalindrome(word3), `the string = '${word3}' is not a palindrome`)
})
