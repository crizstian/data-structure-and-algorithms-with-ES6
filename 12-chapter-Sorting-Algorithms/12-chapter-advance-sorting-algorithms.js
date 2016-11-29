class AdvanceSoritng {

 static swap(arr, v1, v2) {
   const temp = arr[v1];
   arr[v1]    = arr[v2];
   arr[v2]    = temp;
 }


  static mergeSort(arr) {
    if (arr.length < 2) {
      return;
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
         this.mergeArrays(arr, left, left+step, right, right+step);
         left = right + step;
         right = left + step;
      }
      if (right < arr.length) {
         this.mergeArrays(arr, left, left+step, right, arr.length);
      }
      step *= 2;
    }
  }

  static mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr  = new Array(stopLeft - startLeft + 1);
    let k = startRight;
    for (let i = 0; i < (rightArr.length-1); i++) {
      rightArr[i] = arr[k];
      ++k;
    }

    k = startLeft;
    for (let i = 0; i < (leftArr.length-1); i++) {
      leftArr[i] = arr[k];
      k++;
    }
    rightArr[rightArr.length-1] = Infinity; // a sentinel value
    leftArr[leftArr.length-1]   = Infinity; // a sentinel value
    let m = 0;
    let n = 0;
    for (k = startLeft; k < stopRight; k++) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      } else {
        arr[k] = rightArr[n];
        n++;
      }
    }
  }

 static quickSort(alist) {
   this.quickSortHelper(alist,0,alist.length-1);
 }

 static quickSortHelper(alist,first,last) {
   if(first < last) {
    const splitpoint = this.partition(alist,first,last);

     this.quickSortHelper(alist,first,splitpoint-1);
     this.quickSortHelper(alist,splitpoint+1,last);
   }
 }

 static partition(alist,first,last) {
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

module.exports = AdvanceSoritng;
