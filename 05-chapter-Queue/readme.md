# Queue with ES6

### Code Examples
- [Queue Data Structure](./queue.module.js)
- [Import Module](./index.js)

### Description
A queue is a type of list where data are inserted at the end and are removed from the front. Queues are used to store data in the order in which they occur, as opposed to a stack, in which the last piece of data entered is the first element used for processing. Think of a queue like the line at your bank, where the first person into the line is the first person served, and as more customers enter a line, they wait in the back until it is their turn to be served.

A queue is an example of a first-in, first-out (FIFO) data structure. Queues are used to order processes submitted to an operating system or a print spooler, and simulation applications use queues to model scenarios such as customers standing in the line at a bank or a grocery store.

![](https://cdn-images-1.medium.com/max/800/0*SFoM_gyGXk8MIfl4.png)

common operations you can perform on graphs:
- `enqueue`: adds a new element to the queue at the last position
- `dequeue`: remove the first item from the queue
- `front`: returns the first item pushed to queue
- `back`: returns the last item pushed to queue
- `length`: returns the size of the queue
- `isEmpty`: returns true if the queue has elements or false if it has no elements
- `getQueue`: returns the data of the queue

### Example use cases
- Resolving simultaneous server requests from multiple users, such as 3 people buying the last ticket for a plane at almost the same time
- Queuing up data during a breadth-first search.
