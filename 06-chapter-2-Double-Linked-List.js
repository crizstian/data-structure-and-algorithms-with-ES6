class Node {
  constructor(element = 'Head', next = null, prev = null) {
    this.element = element;
    this.next    = next;
    this.prev    = prev;
  }
}

class DLList {
  constructor(head = new Node()) {
    this.head = head;
    this.current = this.head;
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next  = current.next;
    newNode.prev  = current;
    current.next  = newNode;
  }

  remove(item) {
    let currNode = this.find(item);
    if(!(currNode.next === null)) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      currNode.next = null;
      currNode.prev = null;
    }
  }

  findLast() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  displayReverse() {
    let currNode = this.findLast();
    while (!(currNode.prev === null)) {
      console.log(currNode.element);
      currNode = currNode.prev;
    }
  }

  advance(n) {
    let position = n;
    while(!(this.current.next === null)) {
      if(n-- > 0) {
        this.current = this.current.next;
      } else {
        console.log(`Can't advanced ${position} position in the list`);
      }
    }
  }

  back(n) {
    let position = n;
    while(!(this.current.prev === null)) {
      if(n-- > 0) {
        this.current = this.current.prev;
      } else if (this.current.prev === null) {
        console.log(`Can't back ${position} position in the list`);
        break;
      } else {
        break;
      }
    }
  }

  show() {
    console.log(this.current.element);
  }

}
// Implementation
// ##########################################
/*
  1. Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
*/
console.log('CHAPTER 6');
console.log('### Excercise 2');

const cities = new DLList();
cities.insert("Conway", "Head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
console.log('DLList elements: ');
cities.display();
console.log('\nremoved Carlisle\n');
cities.remove("Carlisle");
console.log('\nDLList elements reversed: ');
cities.displayReverse();

console.log('\nDouble Linked List Elements:');
cities.display();

console.log('\nAdvance 3 positions');
cities.advance(3);
console.log('Display current Node');
cities.show();

console.log('\nBack 2 positions');
cities.back(2);
console.log('Display current Node');
cities.show();

console.log('\nBack 2 positions More');
cities.back(2);
console.log('Display current Node');
cities.show();
