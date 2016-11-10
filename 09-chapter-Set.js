// Set data structure class example
class Set {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  add(data) {
    if(this.dataStore.indexOf(data) < 0 ) {
      if(this.size() === 0) {
        this.dataStore.push(data);
      } else {
        let position = 0;
        for (let i = 0; i < this.dataStore.length; i++) {
          if(data > this.dataStore[i]) {
            position = i + 1;
          } else {
            break;
          }
        }
        this.dataStore.splice(position, 0, data);
      }
      return true;
    } else {
      console.log(`${data} is already on the set`);
      return false;
    }
  }

  remove(data) {
    const pos = this.dataStore.findIndex(x => x === data);
    if(pos > 0) {
      this.dataStore.splice(pos,1);
      return true;
    } else {
      console.log(`${data} is not present on the set`);
      return false;
    }
  }

  contains(data) {
    if(this.dataStore.findIndex(x => x === data) > 0) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.dataStore.length;
  }

  union(set) {
    const tempSet = new Set();
    tempSet.dataStore = Object.assign([], this.dataStore);
    for (const key in set.dataStore) {
      if (!tempSet.contains(set.dataStore[key])) {
        tempSet.dataStore.push(set.dataStore[key]);
      }
    }
    return tempSet;
  }

  intersect(set) {
    const tempSet = new Set();
    for (const key in set.dataStore) {
      if (this.contains(set.dataStore[key])) {
        tempSet.add(set.dataStore[key]);
      }
    }
    return tempSet;
  }

  difference(set) {
    const tempSet = new Set();
    for (const key in this.dataStore) {
      if(!set.contains(this.dataStore[key])) {
        tempSet.add(this.dataStore[key]);
      }
    }

    return tempSet;
  }

  show() {
    console.log(JSON.stringify(this.dataStore));
  }

  higher(element) {
    const exists = this.dataStore.findIndex(x => x === element);
    if(exists >= 0 && this.dataStore[exists +1] !== undefined) {
      console.log(`Given the element: ${element}, A higher elemnt is: ${this.dataStore[exists + 1]}`);
    } else if(exists >= 0) {
      console.log(`There is no higher element than ${element}`);
    } else {
      console.log(`The element given: ${element} doesn't exists!`);
    }
  }

  lower(element) {
    const exists = this.dataStore.findIndex(x => x === element);
    if(exists >= 0 && this.dataStore[exists - 1] !== undefined) {
      console.log(`Given the element: ${element}, A lower elemnt is: ${this.dataStore[exists - 1]}`);
    } else if(exists >= 0) {
      console.log(`There is no lower element than ${element}`);
    } else {
      console.log(`The element given: ${element} doesn't exists!`);
    }
  }
}

// Implementation
// ##############################################
/*
  1. Modify the Set class so that the class stores its elements in sorted order.
     Write a program to test your implementation.
*/
console.log('CHAPTER 9');
console.log('### Exercise 1');
const cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
const dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
console.log('## Original Sets');
cis.show();
dmp.show();
console.log('\n### Union to sets ###');
const un = cis.union(dmp);
un.show();
console.log('\n### Intersect to sets ###');
const int = cis.intersect(dmp);
int.show();
console.log('\n### Difference to sets ###');
const dif = cis.difference(dmp);
dif.show();


/*
  2. Add the function higher(element) to the Set class. This function returns
    the least element in the set strictly greater than the given element.
    Test your function in a program.
*/
console.log('\n\n### Exercise 3');
dmp.show();
dmp.higher('Cynthia');
dmp.higher('Raymond');
/*
  3. Add the function lower(element) to the Set class.
     This function returns the greatest element in the set strictly less than the given element.
     Test your function in a program.
*/
console.log('\n\n### Exercise 4');
dmp.show();
dmp.lower('Cynthia');
dmp.lower('Raymond');
