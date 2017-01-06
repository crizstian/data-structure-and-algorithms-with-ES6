const {singleLL, doubleLL, circularLL} = require('./index')

test('Linked List test', assert => {
  const amazingRace = singleLL()

  amazingRace.add('Colombo, Sri Lanka')
  amazingRace.add('Lagos, Nigeria')
  amazingRace.add('Surat, India')
  amazingRace.add('Suzhou, China')

  assert.equal(4, amazingRace.size(), 'can get the size of the linked list')
  amazingRace.add('Hanoi, Vietnam')
  amazingRace.add('Seattle, Washington')
  amazingRace.add('North Pole')

  amazingRace.remove('North Pole')
  amazingRace.remove('Hanoi, Vietnam')

  console.log(amazingRace.display())
  console.log(amazingRace.size())

  assert.equal(amazingRace.size(), 5, 'can remove elements')

  amazingRace.reverse()
  console.log(amazingRace.display())
  console.log(amazingRace.size())

  amazingRace.reverse()
  console.log(amazingRace.display())

})
