class List {
  constructor(dataStore = [], listSize = 0, pos = 0) {
    this.dataStore = dataStore;
    this.listSize  = listSize;
    this.pos       = pos;
  }

  clear() {
    this.dataStore = [];
    this.pos       = 0;
    this.listSize  = 0;
  }

  find(element) {
    return this.dataStore.findIndex(e => e === element);
  }

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos != -1 ) {
      this.dataStore.splice(insertPos+1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  append(element) {
    this.dataStore = [...this.dataStore, element];
    this.listSize++;
  }

  remove(element) {
    const removePos = this.find(element);
    if(removePos != -1) {
      this.dataStore.splice(removePos, 1);
      this.listSize--;
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  length() {
    return this.listSize;
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  contains(element) {
    return (this.dataStore.find(value => value === element) != undefined ) ? true : false;
  }

  displayList() {
    this.dataStore.forEach((item, counter) => {
      console.log(`${counter + 1}.- ${item}`);
    })
  }

  toString() {
    return JSON.stringify(this.dataStore);
  }
}

// Class GenericList for Excercise 1 and 2
// ###################################
class GenericList extends List {
  constructor(dataStore, listSize) {
    super(dataStore, listSize);
  }

  insertGraterThan(element) {
    let grater = false;
    let value  = 0;
    for (const key in this.dataStore) {
      if( typeof element !== 'string' && typeof this.dataStore[key] === 'string' ||
          typeof element === 'string' && typeof this.dataStore[key] !== 'string' ) {
        continue;
      }
      value  = (typeof element === 'string') ? this.dataStore[key] + '' : this.dataStore[key];
      grater = (element > value) ? true : false;
    }
    if(grater) {
      this.dataStore.push(element);
      console.log(`The element: ${element} is grater than elemnt's in the list`);
    } else {
      console.log(`The element: ${element} is not grater than elemnt's in the list`);
    }
  }

  insertSmallerThan(element) {
    let smaller = false;
    let value   = 0;
    for (const key in this.dataStore) {
      if( typeof element !== 'string' && typeof this.dataStore[key] === 'string' ||
          typeof element === 'string' && typeof this.dataStore[key] !== 'string' ) {
        continue;
      }
      value  = (typeof element === 'string') ? this.dataStore[key] + '' : this.dataStore[key];
      smaller = (element < value) ? true : false;
    }
    if(smaller) {
      this.dataStore.push(element);
      console.log(`The element: ${element} is smaller than elemnt's in the list`);
    } else {
      console.log(`The element: ${element} is not smaller than elemnt's in the list`);
    }
  }
}


// Implementations
// ###################################
/*
1.- Write a function that inserts an element into a list only if the element to be inserted
    is larger than any of the elements currently in the list. Larger can mean either greater
    than when working with numeric values, or further down in the alphabet, when working with textual values.
*/
console.log('CHAPTER 3');
console.log('### Excercise 1');

// Numeric list only
const list = new GenericList([1,4,5,7], 4);
list.insertGraterThan(6);
list.insertGraterThan(15);
console.log(list.toString());

// string list only
const list2 = new GenericList(['a','c','f','g'], 4);
list2.insertGraterThan('b');
list2.insertGraterThan('z');
console.log(list2.toString());

// mixed list
const list3 = new GenericList([1,'c',2,'g'], 4);
list3.insertGraterThan('b');
list3.insertGraterThan('z');
list3.insertGraterThan(3);
list3.insertGraterThan(0);
console.log(list3.toString());

// ###################################
/*
2.- Write a function that inserts an element into a list only if the element to be inserted
    is smaller than any of the elements currently in the list.
*/
console.log('\n\n### Excercise 2');

// Numeric list only
const list4 = new GenericList([1,4,5,7], 4);
list4.insertSmallerThan(2);
list4.insertSmallerThan(15);
console.log(list4.toString());

// string list only
const list5 = new GenericList(['a','c','f','g'], 4);
list5.insertSmallerThan('b');
list5.insertSmallerThan('z');
console.log(list5.toString());

// mixed list
const list6 = new GenericList([1,'c',2,'g'], 4);
list6.insertSmallerThan('b');
list6.insertSmallerThan('z');
list6.insertSmallerThan(3);
list6.insertSmallerThan(0);
console.log(list6.toString());

// Class People for Excercise 3
// ###################################
class People {
  constructor(name = 'generic Doe', gender = 'generic') {
    this.name   = name;
    this.gender = gender;
  }
}

class PeopleList extends List {

  displayByGender(gender) {
    console.log(`Displaying only people who has the gender: ${gender}`);
    this.dataStore.forEach((person, counter) => {
      if(person.gender === gender){
        console.log(`${counter + 1}.- ${person.name}`);
      }
    });
  }
}

/*
3.- Create a Person class that stores a person’s name and their gender.
    Create a list of at least 10 Person objects. Write a function that displays
    all the people in the list of the same gender.
*/
console.log('\n\n### Excercise 3');

const p1  = new People('Jhon Doe', 'male');
const p2  = new People('Jane Doe', 'female');
const p3  = new People('Jose Doe', 'male');
const p4  = new People('Lady Doe', 'female');
const p5  = new People('Juan Colorado', 'male');
const p6  = new People('Maritza Doe', 'female');
const p7  = new People('Cris Ramirez', 'male');
const p8  = new People('More Ramirez', 'female');
const p9  = new People('Lenin Ramirez', 'male');
const p10 = new People('Jessy Doe', 'female');

const peopleList = new PeopleList();
peopleList.append(p1);
peopleList.append(p2);
peopleList.append(p3);
peopleList.append(p4);
peopleList.append(p5);
peopleList.append(p6);
peopleList.append(p7);
peopleList.append(p8);
peopleList.append(p9);
peopleList.insert(p10,p3.name);
peopleList.displayByGender('male');
peopleList.displayByGender('female');


// Class People for Excercise 4
// ###################################

class Customer {
  constructor(name = 'Juan Colorado', movie = 'Monarcas Morelia Movie') {
    this.name  = name;
    this.movie = movie;
  }
}

class MovieStore extends List {

  constructor(rentedList = new List()) {
    super();
    this.rentedList = rentedList;
  }

  checkOut(name, movie, customerList) {
    if(this.contains(movie)) {
       const c = new Customer(name, movie);
       customerList.append(c);
       this.remove(movie);
       this.rentedList.append(movie);
       console.log('\nMovies rented: ');
       this.rentedList.displayList();
    } else {
      console.log(`\n${movie} is not available to rent or is already rented`);
    }
  }

  checkIn(movie, customer, customerList) {
    if(this.rentedList.contains(movie)) {
      this.rentedList.remove(movie);
      this.append(movie);
      // customerList.remove(customer.name);
    }
  }

}

/*
4.- Modify the video-rental kiosk program so that when a movie is checked out it
    is added to a list of rented movies. Display this list whenever a customer
    checks out a movie.
*/
console.log('\n\n### Excercise 4');
const readline   = require('readline');
const fs         = require('fs');

const movieStore = new MovieStore();

const rl         = readline.createInterface({
 input: fs.createReadStream('movies.txt')
});

rl.on('line', (line) => movieStore.append(line));

rl.on('close', () => {
  const customers = new List();
  console.log('\nAvailable movies:');
  movieStore.displayList();
  movieStore.checkOut("Jane Doe", "The Godfather", customers);
  movieStore.checkOut("Jhon Doe", "Fight Club", customers);
  movieStore.checkOut("Cris Ramirez", "Inception", customers);
  movieStore.checkOut("Maritza Doe", "The Godfather", customers);
  console.log('\nCustomer Rentals:');
  console.log(customers.toString(), '\n');

  // ###################################
  /*
  5.- Create a check-in function for the video-rental kiosk program so that a
      returned movies is deleted from the rented movies list and is added back
      to the available movies list.
  */
  console.log('\n\n### Excercise 5');
  movieStore.checkIn('Inception', 'Cris Ramirez', customers);
  movieStore.checkIn('The Godfather', 'Jane Doe', customers);
  console.log('\nAvailable movies:');
  movieStore.displayList();
  console.log('\nMovies rented: ');
  movieStore.rentedList.displayList();
});
