class GenericArray {
   constructor(dataStore = [], numElements = 0, gaps = [5,3,1]) {
     this.dataStore   = dataStore;
     this.numElements = numElements;
     this.pos = 0;
     this.gaps = gaps;
   }

   setData() {
     for (let i = 0; i < this.numElements; i++) {
       this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
     }
   }

   setGaps(gaps) {
     this.gaps = gaps;
   }

   toString() {
     let values = '';
     for (let i = 0; i < this.numElements; i++) {
       values += `${this.dataStore[i]} `;
       if(i > 0 && i % 10 === 0) {
         values += '\n';
       }
     }
     return values;
   }

   swap(arr, v1, v2) {
     let temp = arr[v1];
     arr[v1]  = arr[v2];
     arr[v2]  = temp;
   }

  //  The slowest sort algorithm
   bubbleSort() {
     let numElements = this.dataStore.length;
     for (let outer = numElements; outer >= 2; outer--) {
       for (let inner = 0; inner <= outer - 1; inner++) {
         if(this.dataStore[inner] > this.dataStore[inner+1]) {
           this.swap(this.dataStore, inner, inner+1);
         }
       }
     }
   }

  //  faster sort algorithm
   selectionSort() {
     let min;
     for (let outer = 0; outer <= this.dataStore.length-2; outer++) {
       min = outer;
       for (let inner = outer + 1; inner <= this.dataStore.length-1; inner++) {
         if (this.dataStore[inner] < this.dataStore[min]) {
           min = inner;
         }
       }
       this.swap(this.dataStore, outer, min);
     }
   }

  // fastest sort algorithm for small data sets
   insertionSort() {
     let temp, inner;
     for (let outer = 1; outer <= this.dataStore.length-1; outer++) {
       temp = this.dataStore[outer];
       inner = outer;
       while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
          this.dataStore[inner] = this.dataStore[inner-1];
          --inner;
       }
       this.dataStore[inner] = temp;
     }
   }

  //  Advanced sort algorithms
  shellSort() {
    for (let g = 0; g < this.gaps.length; g++) {
      for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
        let temp = this.dataStore[i];
        let last;
        for (let j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
          this.dataStore[j] = this.dataStore[j - this.gaps[g]];
          last = j;
        }
        this.dataStore[last] - temp;
      }
    }
  }

// The king for sorting large data sets
 quickSort(alist) {
   this.quickSortHelper(alist,0,alist.length-1);
 }

 quickSortHelper(alist,first,last) {
   if(first < last) {
    const splitpoint = this.partition(alist,first,last);

     this.quickSortHelper(alist,first,splitpoint-1);
     this.quickSortHelper(alist,splitpoint+1,last);
   }
 }

 partition(alist,first,last) {
   let pivotvalue = alist[first];

   let leftmark  = first+1;
   let rightmark = last;
   let done = false;

   while (!done) {
     while (leftmark <= rightmark && alist[leftmark] <= pivotvalue) {
       leftmark = leftmark + 1;
     }

     while (alist[rightmark] >= pivotvalue && rightmark >= leftmark) {
       rightmark = rightmark -1;
     }

     if (rightmark < leftmark) {
       done = true;
     } else {
       this.swap(alist, leftmark, rightmark);
     }
   }

   let temp = alist[first];
   alist[first] = alist[rightmark];
   alist[rightmark] = temp;

   return rightmark;
 }

}

// Implementation
// ####################################################
function displayImplementations(obj, typeSort) {
  console.log(typeSort);
  // console.log(obj.toString());
  let start = new Date().getTime();

  switch (typeSort) {
    case 'Bubble Sort':
      myNums.bubbleSort();
    break;
    case 'Selection Sort':
      myNums.selectionSort();
    break;
    case 'Insertion Sort':
      myNums.insertionSort();
    break;
    case 'Shell Sort':
      myNums.shellSort();
    break;
    case 'Quick Sort':
      myNums.quickSort(myNums.dataStore);
    break;
    default:
      myNums.dataStore.sort();
  }

  let end = new Date().getTime();
  console.log();
  // console.log(myNums.toString());
  console.log(`Elapsed time for the ${typeSort} on ${numElements} elements is: ${end} - ${start} = ${end - start} milliseconds.`);
  console.log('###################');
}

const sortTypes = ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Shell Sort', 'Quick Sort','default'];
const numElements = 10000;
const myNums = new GenericArray(undefined, numElements);
for (let type in sortTypes) {
  myNums.setData();
  displayImplementations(myNums, sortTypes[type]);
}
