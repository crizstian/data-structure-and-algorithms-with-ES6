class Dictionary {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  add(key, value) {
    this.dataStore[key] = value;
  }

  find(key) {
    return this.dataStore[key];
  }

  remove(key) {
    delete this.dataStore[key];
  }

  showOne() {
    if(this.count() > 0) {
      const key = Object.keys(this.dataStore)[0];
      console.log(key, ' -> ', this.dataStore[key]);
    }
  }

  showAll() {
    // Display in ascending order
    Object.keys(this.dataStore).forEach(key => {
      console.log(key, ' -> ', this.dataStore[key]);
    });
  }

  showAllSorted() {
    // Display in ascending order
    Object.keys(this.dataStore).sort().forEach(key => {
      console.log(key, ' -> ', this.dataStore[key]);
    });
  }

  count() {
    // or this.dataStore.length since dataStore is an array, but this aproach is only for arrays
    // Object.keys(obj).length returns how many elements has the Dictionary
    return Object.keys(this.dataStore).length;
  }

  clear() {
    this.dataStore = [];
  }

}

// Implementation
// #####################################
console.log('CHAPTER 7');
const pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
console.log('\n Cleat Dictionary');
pbook.clear();
console.log("Number of entries: " + pbook.count());

// #################################################
/*
  1. Write a program that takes a set of names and phone numbers from a text file
     and stores them in a Dictionary object. Include in your program the ability to
     display one phone number, display all phone numbers, add new phone numbers,
     remove phone numbers, and clear out the list of numbers.
*/
console.log('\n\n### Exercise 1');
const readline   = require('readline');
const fs         = require('fs');

const dictionary = new Dictionary();

const rl = readline.createInterface({
 input: fs.createReadStream('phoneDictionary.txt')
});

rl.on('line', (line) => {
  const split = line.split(' ');
  dictionary.add(split[0], split[1]);
});

rl.on('close', () => {
  console.log('\nDisplay 1 phone number');
  dictionary.showOne();

  console.log('\nDisplay All');
  dictionary.showAll();

  dictionary.add('Cristian', '111-111-111-111');
  dictionary.add('Kalesei', '222-111-222-111');
  dictionary.add('Kal', '111-333-111-333');
  console.log('\nDisplay All');
  dictionary.showAll();

  console.log('\nRemoving elements');
  dictionary.remove('Mike');
  dictionary.remove('Raymond');
  dictionary.remove('Kal');

  console.log('\nDisplay All');
  dictionary.showAll();
  console.log(dictionary.find('Jane'));

  /*
    2. Using the Dictionary class, write a program that stores the number of occurrences
      of words in a text. Your program should display each word in a text just once as well
      as the number of times the word occurs in the text.
  */
  console.log('\n\n### Exercise 2');
  const d    = new Dictionary();
  let string = 'the brown fox jumped over the blue fox';

  string = string.split(' ');
  string.forEach(item => {
    if(item !== ' ') {
      let w = d.find(item);
      if(w !== undefined) {
        const value = w + 1;
        d.remove(item);
        d.add(item, value);
      } else {
        d.add(item, 1);
      }
    }
  });
  console.log('showing unsorted');
  d.showAll();

  /*
    3. Rewrite exercise 2 so that it displays the words in sorted order.
  */
  console.log('\n\n### Exercise 3');
  console.log('showing sorted');
  d.showAllSorted();
});
