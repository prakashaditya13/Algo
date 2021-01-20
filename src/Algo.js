/*
! Algo Javascript Library 1.0
! Creator :- Aditya Prakash
! Date :- 17 Jan, 2021
! License :- MIT license
! Documentation :- 
! NPM Package :- 
*/

//Implementation Success Message
(function () {
  console.log("Algo.js initialization successfully!");
})();
// const Error = {
//     Searching: {
//         linear: function(Errorele, ErrorFind){
//             if(typeof(ErrorFind) === "undefined"){
//                 console.warn(`Please provide the parameter in Algo.function(${find})`)
//             }
//             if(typeof(Errorele) === "string" || typeof(Errorele) === "number"){
//                 console.error(`Passing of parameter in Algo.function() is not type of 'String' and 'Number'
//                     Please use Algo.function(!undefined)
//                 `)
//             }
//         },
//         binary: function(){},
//         jump: function(){},
//         exponential: function(){}
//     }
// }
//Core Algo functionality with Objects
const Algo = {
  index: null,
  value: null,
  isBool: null,
  LinearSearch: function (elem, find) {
    // Error.Searching.linear(elem,find)
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === find) {
        this.isBool = true;
        this.index = i;
        this.value = find;
        break;
      } else {
        this.isBool = false;
        this.index = -1;
        this.value = "Not Found";
      }
    }
    return this;
  },
  BinarySearch: function (elem, find) {
    let FirstEnd = 0,
      LastEnd = elem.length - 1,
      middle;
    this.isBool = false;
    this.index = -1;
    this.value = "Not Found";
    while (this.isBool === false && FirstEnd <= LastEnd) {
      middle = Math.floor((FirstEnd + LastEnd) / 2);
      if (elem[middle] === find) {
        this.isBool = true;
        this.index = middle;
        this.value = find;
        break;
      } else if (elem[middle] > find) {
        LastEnd = middle - 1;
      } else {
        FirstEnd = middle + 1;
      }
    }
    return this;
  },
  JumpSearch: function (arrayToSearch, valueToSearch) {
    var length = arrayToSearch.length;
    var step = Math.floor(Math.sqrt(length));
    var index = Math.min(step, length) - 1;
    var lowerBound = 0;
    this.isBool = false;
    this.value = "Not Found";
    while (arrayToSearch[Math.min(step, length) - 1] < valueToSearch) {
      lowerBound = step;
      step += step;
      if (lowerBound >= length) {
        this.index = -1;
        return this;
      }
    }

    var upperBound = Math.min(step, length);
    while (arrayToSearch[lowerBound] < valueToSearch) {
      lowerBound++;
      if (lowerBound === upperBound) {
        this.index = -1;
        return this;
      }
    }
    if (arrayToSearch[lowerBound] === valueToSearch) {
      this.index = lowerBound;
      this.isBool = true;
      this.value = valueToSearch;
    }
    return this;
  },
  ExponentialSearch: function (elem, find) {
    function binarySearch(arrayToSearch, valueToSearch, start, end) {
      if (start <= end) {
        var middle = Math.ceil((end + start) / 2);
        var middleValue = arrayToSearch[middle];
        if (middleValue === valueToSearch) {
          return middle;
        } else if (valueToSearch < middleValue) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
        return binarySearch(arrayToSearch, valueToSearch, start, end);
      }
      return -1;
    }
    var len = elem.length;
    if (elem[0] === find) {
      this.index = 0;
      this.isBool = true;
      this.value = find;
    }
    var i = 1;
    while (i < len && elem[i] <= find) {
      i = i * 2;
    }
    this.index = binarySearch(elem, find, i / 2, Math.min(i, len - 1));
    if (this.index != -1) {
      this.isBool = true;
      this.value = find;
    } else {
      this.isBool = false;
      this.value = "Not Found";
    }
    return this;
  },
  QuickSort: function (UnsortedArray) {
    if (UnsortedArray.length <= 1) {
      return UnsortedArray;
    } else {
      var leftUnsortedArray = [];
      var rightUnsortedArray = [];
      var newSortedArray = [];
      var pivotElement = UnsortedArray.pop();
      var len = UnsortedArray.length;
      for (var i = 0; i < len; i++) {
        if (UnsortedArray[i] <= pivotElement) {
          leftUnsortedArray.push(UnsortedArray[i]);
        } else {
          rightUnsortedArray.push(UnsortedArray[i]);
        }
      }
      return newSortedArray.concat(
        this.QuickSort(leftUnsortedArray),
        pivotElement,
        this.QuickSort(rightUnsortedArray)
      );
    }
  },
  BubbleSort: function (UnsortedArray) {
    var len = UnsortedArray.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0, stop = len - i; j < stop; j++) {
        if (UnsortedArray[j] > UnsortedArray[j + 1]) {
          var temp = UnsortedArray[j];
          UnsortedArray[j] = UnsortedArray[j + 1];
          UnsortedArray[j + 1] = temp;
        }
      }
    }
    return UnsortedArray;
  },
  MergeSort: function (UnsortedArray) {
    function merge(left, right) {
      var result = [];
      var LeftIndex = 0;
      var RightIndex = 0;
      while (LeftIndex < left.length && RightIndex < right.length) {
        if (left[LeftIndex] < right[RightIndex]) {
          result.push(left[LeftIndex]);
          LeftIndex++;
        } else {
          result.push(right[RightIndex]);
          RightIndex++;
        }
      }
      return result
        .concat(left.slice(LeftIndex))
        .concat(right.slice(RightIndex));
    }

    if (UnsortedArray.length === 1) {
      return UnsortedArray;
    }
    const middle = Math.floor(UnsortedArray.length / 2);
    const left = UnsortedArray.slice(0, middle);
    const right = UnsortedArray.slice(middle);
    return merge(this.MergeSort(left), this.MergeSort(right));
  },
  InsertionSort: function (UnsortedArray) {
    for (var i = 1; i < UnsortedArray.length; i++) {
      if (UnsortedArray[i] < UnsortedArray[0]) {
        UnsortedArray.unshift(UnsortedArray.splice(i, 1)[0]);
      } else if (UnsortedArray[i] > UnsortedArray[i - 1]) {
        continue;
      } else {
        for (var j = 1; j < i; j++) {
          if (
            UnsortedArray[i] > UnsortedArray[j - 1] &&
            UnsortedArray[i] < UnsortedArray[j]
          ) {
            UnsortedArray.splice(j, 0, UnsortedArray.splice(i, 1)[0]);
          }
        }
      }
    }
    return UnsortedArray;
  },
  SelectionSort: function (UnsortedArray) {
    var n = UnsortedArray.length;
    for (let i = 0; i < n; i++) {
      var min = i;
      for (let j = i + 1; j < n; j++) {
        if (UnsortedArray[j] < UnsortedArray[min]) {
          min = j;
        }
      }
      if (min != i) {
        var temp = UnsortedArray[i];
        UnsortedArray[i] = UnsortedArray[min];
        UnsortedArray[min] = temp;
      }
    }
    return UnsortedArray;
  },
  HeapSort: function (array) {
    let size = array.length;
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) heapify(array, size, i);
    for (let i = size - 1; i >= 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      heapify(array, i, 0);
    }
    function heapify(array, size, i) {
      let max = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      if (left < size && array[left] > array[max]) max = left;
      if (right < size && array[right] > array[max]) max = right;
      if (max != i) {
        let temp = array[i];
        array[i] = array[max];
        array[max] = temp;
        heapify(array, size, max);
      }
    }
    return array;
  },
  // Currently Radix sort not supported for string type value sorting
  RadixSort: function (UnsortedRadixArray) {
    const base = 10;
    let divider = 1;
    let maxVal = Number.NEGATIVE_INFINITY;
    while (divider <= maxVal || divider < base) {
      let buckets = [...Array(10)].map(() => []);

      for (let val of UnsortedRadixArray) {
        const positiveVal = Math.abs(val);
        buckets[Math.floor((positiveVal / divider) % base)].push(val);
        maxVal = positiveVal > maxVal ? positiveVal : maxVal;
      }
      UnsortedRadixArray = [].concat.apply([], buckets);
      divider *= base;
    }
    for (let i = 0; i < UnsortedRadixArray.length; i++) {
      if (UnsortedRadixArray[i] < 0) {
        UnsortedRadixArray.unshift(UnsortedRadixArray.splice(i, 1)[0]);
      }
    }
    return UnsortedRadixArray;
  },
  BucketSort: function (arr, bucketSize) {
    if (arr.length < 2) {
      return arr;
    }
    // create buckets and distribute the elements
    const buckets = createBuckets(arr, bucketSize);
    // sort the buckets using insertion sort and add all bucket elements to sorted result
    return sortBuckets(buckets);

    function createBuckets(arr, bucketSize) {
      // determine the bucket count
      let min = arr[0];
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
          min = arr[i];
        } else if (arr[i] > max) {
          max = arr[i];
        }
      }
      const bucketCount = Math.floor((max - min) / bucketSize) + 1;

      // initialize each bucket (a multidimensional array)
      const buckets = [];
      for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
      }

      // distribute elements into buckets
      for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i]);
      }
      return buckets;
    }
    function sortBuckets(buckets) {
      const sortedArr = [];
      for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
          Algo.InsertionSort(buckets[i]); // quick sort is another good option
          sortedArr.push(...buckets[i]);
        }
      }
      return sortedArr;
    }
  },
};
module.exports = Algo;
