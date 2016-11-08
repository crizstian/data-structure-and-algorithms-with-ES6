class Node {
  constructor(element = 'Head', next = null) {
    this.element = element;
    this.next    = next;
  }
}

class LList {
  constructor(head = new Node()) {
    this.head = head;
    this.head.next = this.head;
    this.current   = this.head;
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next.element === 'Head') && currNode.next.element != item) {
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

  remove(item) {
    let prevNode = this.findPrevious(item);
    prevNode.next = prevNode.next.next;
  }

  display() {
    let currNode = this.head;
    while (currNode.next.element !== 'Head') {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  }

  advance(n) {
    let position = n;
    while(n-- > 0) {
      this.current = this.current.next;
    }
  }

  back(n) {
    let position = n;
    while(n-- > 0) {
      this.current = this.current.prev;
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
console.log('### Excercise 3');

const cities = new LList();
cities.insert("Conway", "Head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log('remove; Carlisle\n');
cities.remove("Carlisle");

console.log('Circular Linked List Elements:');
cities.display();

console.log('\nAdvance 3 positions');
cities.advance(3);
console.log('Display current Node');
cities.show();

console.log('\nAdvance 2 more positions');
cities.advance(2);
console.log('Display current Node');
cities.show();
