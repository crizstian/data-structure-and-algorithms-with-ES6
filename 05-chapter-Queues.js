// Queue data structure class example
class Queue {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    this.dataStore.shift();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  empty() {
    if(this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  count() {
    return this.dataStore.length;
  }

  toString() {
    return JSON.stringify(this.dataStore);
  }
}

// Dequeue class example for exercise 1
class Dequeue {
  constructor(dataStore = []) {
    this.dataStore = dataStore;
  }

  enqueueFront(element) {
    this.dataStore.unshift(element);
  }

  enqueue(element) {
    this.dataStore.push(element);
  }

  dequeue() {
    this.dataStore.shift();
  }

  dequeueBack() {
    this.dataStore.pop();
  }

  front() {
    return this.dataStore[0];
  }

  back() {
    return this.dataStore[this.dataStore.length - 1];
  }

  empty() {
    if(this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  count() {
    return this.dataStore.length;
  }

  toString() {
    return JSON.stringify(this.dataStore);
  }

}

// Implementation
// ###########################################
/*
  1. Modify the Queue class to create a Deque class. A deque is a queue-like structure
     that allows elements to be added and removed from both the front and the back of the list.
     Test your class in a program.
*/
console.log('CHAPTER 5');
console.log('### Excercise 1');
const deq = new Dequeue();
deq.enqueue('Jane');
deq.enqueue('Jhon');
deq.enqueue('Sam');
deq.enqueueFront('Emilia');
deq.enqueueFront('Mother of Dragons');
deq.enqueueFront('Kalisy');
console.log('Original Queue Stack');
console.log(deq.toString());
deq.dequeue();
deq.dequeue();
deq.dequeueBack();
console.log('2 Dequeue and 1 Dequeue from back');
console.log(deq.toString());

/*
  2.- Use the Deque class you created to determine if a given word is a palindrome.
*/

function isPalindrome(word) {
  const letter   = new RegExp('[a-z]');
  let palindrome = word.toLowerCase().split('');

  palindrome = palindrome.filter(item => letter.test(item));
  const queue = new Dequeue(palindrome);

  while (!queue.empty()) {
    if(queue.count() > 1) {
      a = queue.front();
      b = queue.back();
    } else {
      console.log(`The string '${word.toUpperCase()}' is palindrome!`);
      break;
    }
    if(a === b && queue.count() > 1) {
      queue.dequeue();
      queue.dequeueBack();
    } else {
      console.log(`The string '${word.toUpperCase()}' is not palindrome!`);
      break;
    }
  }
}

console.log('\n\n### Excercise 2');
const word  = 'racecar';
const word2 = 'A man, a plan, a canal: Panama';
const word3 = 'what is this';

isPalindrome(word);
isPalindrome(word2);
isPalindrome(word3);

/*
  3. Modify the priority queue example from Example 5-5 so that the higher-priority
     elements have higher numbers rather than lower numbers. Test your implementation
     with the example in the chapter.
*/
// Class Patient for Exercise 3
class Patient {
  constructor(name = 'generic', code = '0') {
    this.name = name;
    this.code = code;
  }
}
class GenericQueue extends Queue {
  constructor() {
    super();
  }

  dequeue() {
    let priority = this.front().code;
    let position = 0;
    for (let i = 0; i < this.count(); i++) {
      if (this.dataStore[i].code >= priority) {
        priority = this.dataStore[i].code;
        position = i;
      }
    }
    return this.dataStore.splice(position,1);
  }
}

console.log('\n\n### Excercise 3');
const ed = new GenericQueue();
const p  = new Patient("Smith",5);
ed.enqueue(p);
const p2 = new Patient("Jones", 4);
ed.enqueue(p2);
const p3 = new Patient("Fehrenbach", 6);
ed.enqueue(p3);
const p4 = new Patient("Brown", 1);
ed.enqueue(p4);
const p5 = new Patient("Ingram", 1);
ed.enqueue(p5);
console.log(ed.toString());

while (ed.count() > 0) {
  let seen = ed.dequeue();
  console.log("\nPatient being treated: " + seen[0].name);
  console.log("Patients waiting to be seen: ")
  console.log(ed.toString(), '\n');
}
