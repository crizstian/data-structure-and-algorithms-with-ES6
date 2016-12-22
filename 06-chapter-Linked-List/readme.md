# Linked List, Double Linked List, Circular Linked List

### Code Examples

- [Linked List Data Structure]('./linked-list.module')
- [Double Linked List Data Structure]('./double-linked-list.module')
- [Circular Linked List Data Structure]('./circular-linked-list.module')
- [Import complete module]('./index')

### Definition Linked List

The simplest form of linked lists — a singly linked list — is a series of nodes where each individual node contains both a value and a pointer to the next node in the list.

common operations you can perform on graphs:

**Additions**
- `add`: grow the list by adding items to the end of the list.
- `addHead`: Similar to our add method above, we always know the position of the head, so no iteration necessary.
- `insertAfter`: have to iterate over the entire list to find the target node that your value should be inserted after.
**Removals**
- `remove`: will always remove from a given position in the list.

**Search**
- `contains`: will search the list for a value.

### Example use cases
- Storing values in a hash table to prevent collisions

### Resources

- [A Gentle Introduction to Data Structures: How Linked Lists Work](https://medium.freecodecamp.com/a-gentle-introduction-to-data-structures-how-linked-lists-work-5adc793897dd#.ti1dvnsog)
