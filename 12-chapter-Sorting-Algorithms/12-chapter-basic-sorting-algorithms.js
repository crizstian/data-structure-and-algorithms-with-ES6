class BasicSorting {

  static swap(arr, v1, v2) {
    const temp = arr[v1];
    arr[v1]    = arr[v2];
    arr[v2]    = temp;
  }

   static bubbleSort(dataStore) {
     const numElements = dataStore.length;
     for (let outer = numElements; outer >= 2; outer--) {
       for (let inner = 0; inner <= outer - 1; inner++) {
         if(dataStore[inner] > dataStore[inner+1]) {
          this.swap(dataStore, inner, inner+1);
         }
       }
     }
   }

   static selectionSort(dataStore) {
     let min;
     for (let outer = 0; outer <= dataStore.length-2; outer++) {
       min = outer;
       for (let inner = outer + 1; inner <= dataStore.length-1; inner++) {
         if (dataStore[inner] < dataStore[min]) {
           min = inner;
         }
       }
       this.swap(dataStore, outer, min);
     }
   }

   static insertionSort(dataStore) {
     let temp
     let inner;

     for (let outer = 1; outer <= dataStore.length-1; outer++) {
       temp = dataStore[outer];
       inner = outer;
       while (inner > 0 && (dataStore[inner-1] >= temp)) {
          dataStore[inner] = dataStore[inner-1];
          --inner;
       }
       dataStore[inner] = temp;
     }
   }

}

module.exports = BasicSorting;
