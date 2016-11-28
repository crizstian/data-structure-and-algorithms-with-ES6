# Array data structure

### Examples
- [Array exercises and examples codes in ES6](./02-chapter-Arrays.js)

### Definition

The array is the most common data structure in computer programming. Arrays are usually very efficient and are considered good choices for many data storage purposes.

Arrays in JavaScript are very flexible. There are several different ways to create arrays, access array elements, and perform tasks such as searching and sorting the elements stored in an array.

```
const myArray = [1, 'one', {some: 'object'}, new Date()]
```
![](https://docs.oracle.com/javase/tutorial/figures/java/objects-tenElementArray.gif)

### Usage of arrays

**Creating an array**

```
const grades = [1,2,3];          // this is the best way to create an array.
const grades = new Array(1,2,3); // use of the constructor.
const grades = new Array(3);     // will initialize the array with the length of 3.
grades = [...grades, grade]; 	 // will reinstantiate the grades variable.

// use of the concat() function.
const a = [1,2,3];
const b = [4,5,6];
const c = a.concat(b); // this creates a new array by concatenating the 2 arrays.

```
or using strings to create an array, by using the ***split*** method and space ' ' delimiter will create a new array containg the words of the text.
```
const words = someStringText.split(' ');
```

**Inserting elements to an array**

There are several ways to add a new element to the array for example:

```
// This two operations will add a new element at the end of the array.
grades.push(element);
grades[grades.length + 1] = grade;

// use of shift() method will insert a new element at the front of the array.
grades.shift(grade);

//use of the splice() method will insert a new element at the position indicated.
grades.splice(position, 0, grade);
```
The splice() method, has the ability to insert or to remove an element, the first parameter of the method indicates the position, the second parameter indicates the type of operation 0 = insert, 1 = delete, and the third parameter is the new value to insert.

**Deleting elements to an array**

```
// use of the splice() method.
grades.splice(position, numElementsToDelete);
```
