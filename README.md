# Algo.js

This repository contains JavaScript based examples of many
popular algorithms and data structures.( Initially it has only two categories of algorithm ).

*☝ Note that this library is meant to be used for learning and researching purposes
and it is **Testing** meant to be not used for production currently. Later on it is also used as production in your future projects.*

`Algorithm` - Currently Available

* `Searching` - 
   * Linear Search
   * Binary Search
   * Jump Search
   * Exponential Search
* `Sorting` - 
   * Quick Sort
   * Bubble Sort
   * Merge Sort
   * Insert Sort
   * Selection Sort
   * Heap Sort
   * Radix Sort
   * Bucket Sorting

## How to use this repository

**Using CDN**
```
https://cdn.jsdelivr.net/gh/prakashaditya13/Algo/src/Algo.js
```
```
https://cdn.jsdelivr.net/gh/prakashaditya13/Algo/src/Algo.min.js
```
*☝ Only For Testing Purpose until we release the stable version of the library*

**Using NPM**

**Install dev dependencies**

```
npm install -D jest
```

**Run all tests**

```
npm test
```

**For testing Coverage**

```
npm coverage
```

**Documentation**

*Searching* - 

```
Algo.LinearSearch([1,2,3,45,32,56],3).index // => 2
Algo.LinearSearch([1,2,3,45,32,56],100).index // => -1
Algo.LinearSearch([1,2,3,45,32,56],32).isBool //=> true
Algo.LinearSearch([1,2,3,45,32,56],60).isBool // => false
Algo.LinearSearch([1,2,3,45,32,56],32).value // => 32
Algo.LinearSearch([1,2,3,45,32,56],50).value // => 'Not Found'
```

`Same As For Searching Algorithms`

*Sorting* - 

```
Algo.QuickSort([9, 0, 2, 7, -2, 6, 1 ]) // => [-2,0,1,2,6,7,9]
Algo.BubbleSort(['prakash','aditya','aaditya','rahul']) // => ['aaditya','aditya','prakash','rahul']
Algo.MergeSort(['a','c','b']) // => ['a','b','c']
Algo.RadixSort([5,3,88,235,65,23,4632,234]) // => [ 3, 5, 23, 65, 88, 234, 235, 4632 ] 'Not supported for string values'
Algo.BucketSort([5,4,3,2,6,-1,7,10,9,8],1) // => [-1,2,3,4,5,6,7,8,9,10] 
```

`Don't forget to give ⭐ to the repo :)`

