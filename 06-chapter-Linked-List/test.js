const {linkedList} = require('./index')

test('Linked List test', assert => {
  const amazingRace = linkedList()

  amazingRace.add('Colombo, Sri Lanka')

  assert.equal(amazingRace.show(), 'Colombo, Sri Lanka', 'can add an element')

  amazingRace.add('Lagos, Nigeria')
  amazingRace.add('Surat, India')
  amazingRace.add('Suzhou, China')

  assert.equal(4, amazingRace.size(), 'can get the size of the linked list')
  console.log(`contains 'Suzhou, China' ? ${amazingRace.contains('Suzhou, China')}`) // true
  console.log(`contains 'Hanoi, Vietnam' ? ${amazingRace.contains('Hanoi, Vietnam')}`) // true
  amazingRace.add('Hanoi, Vietnam')
  console.log(`contains 'Seattle, Washington' ? ${amazingRace.contains('Seattle, Washington')}`) // true
  amazingRace.add('Seattle, Washington')
  console.log(`contains 'North Pole' ? ${amazingRace.contains('North Pole')}`) // true
  amazingRace.add('North Pole')

  amazingRace.remove('North Pole')
  amazingRace.remove('Hanoi, Vietnam')

  assert.equal(amazingRace.size(), 5, 'can remove elements')
})
