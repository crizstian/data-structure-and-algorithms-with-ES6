// Node Linked List member class example
class Node {
  constructor(element = 'Head', next = null) {
    this.element = element;
    this.next    = next;
  }
}

// Linked List data structure class example
class LList {
  constructor(head = new Node()) {
    this.head = head;
    this.current = this.head;
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item){
    const newNode = new Node(newElement);
    const current = this.find(item);
    newNode.next  = current.next;
    current.next = newNode;
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if(!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    while (!(currNode.next === null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  advance(n) {
    let position = n;
    while(!(this.current.next === null)) {
      if(n-- > 0) {
        this.current = this.current.next;
      } else if (this.current.next === null) {
        console.log(`Can't advanced ${position} position in the list`);
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
console.log('### Excercise 1');

const cities = new LList();
cities.insert("Conway", "Head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('remove; Carlisle\n');
cities.remove("Carlisle");

console.log('Linked List Elements:');
cities.display();

console.log('\nAdvance 3 positions');
cities.advance(3);
console.log('Display current Node');
cities.show();
