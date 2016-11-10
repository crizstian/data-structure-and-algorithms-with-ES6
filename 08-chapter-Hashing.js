// HashTable data structure class example
class HashTable {
  constructor() {
    this.table  = new Array(137);
    this.values = [];
  }

  hash(string) {
    const H   = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length -1
    }
    return parseInt(total);
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(data) {
    const pos = this.hash(data);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}

// HashTable with Build Chains technique class example for exercise 2
class HashTableChains extends HashTable {
  constructor() {
    super();
    this.buildChains();
  }
  buildChains() {
    for (var i = 0; i < this.table.length; i++) {
      this.table[i] = new Array();
    }
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key][0] !== undefined) {
        console.log(key, ' : ', this.table[key]);
      }
    }
  }

  put(key, data) {
    const pos = this.hash(key);
    let index = 0;
    if(this.table[pos][index] === undefined) {
      this.table[pos][index] = data;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined ) {
        index++;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const pos = this.hash(key);
    let index = 0;
    while (this.table[pos][index] != key) {
      if(this.table[pos][index] !== undefined) {
        return this.table[pos][index]
      } else {
        return undefined;
      }
      index++;
    }
  }
}

// HashTable with Linear Probing technique class example for exercise 1
class HashTableLinearP extends HashTable {
  constructor() {
    super();
    this.values = new Array();
  }

  put(key, data) {
    const pos = this.hash(key);
    if(this.table[pos] === undefined) {
      this.table[pos]  = key;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos]  = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
}

// Implementation
// #################################################
console.log('CHAPTER 8');

const readline   = require('readline');
const fs         = require('fs');

const hash1 = new HashTableLinearP();
const hash2 = new HashTableChains();

const rl = readline.createInterface({
 input: fs.createReadStream('words.txt')
});

rl.on('line', (line) => {
  const split = line.split(':');
  hash1.put(split[0], split[1]);
  hash2.put(split[0], split[1]);
});

rl.on('close', () => {
  /*
    1. Use linear probing to create a simple dictionary to store the definitions of words.
       Reads a text file that contains a list of words and definitions and stores them in a hash table.
  */
  console.log('### Exercise 1');
  hash1.showDistro();
  /*
    2. Repeat exercise 1 using separate chaining.
  */
  console.log('\n\n### Exercise 2');
  hash2.showDistro();

});
