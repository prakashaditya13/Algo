const { test, expect } = require('@jest/globals')
const Algo = require('./src/Algo')

// Linear Searching for index, isBool and return same element
test('Linear Search Testing', () => {
    // checking element index 
    expect(Algo.LinearSearch([1,2,3,45,32,56],3).index).toBe(2)
    expect(Algo.LinearSearch([1,2,3,45,32,56],100).index).toBe(-1)
    // checking element Boolean
    expect(Algo.LinearSearch([1,2,3,45,32,56],32).isBool).toBe(true)
    expect(Algo.LinearSearch([1,2,3,45,32,56],60).isBool).toBe(false)
    // checking return element
    expect(Algo.LinearSearch([1,2,3,45,32,56],32).value).toBe(32)
    expect(Algo.LinearSearch([1,2,3,45,32,56],50).value).toBe("Not Found")
})

// Binary Searching for indexing, isBool and same element return
// Array must be in sorted format
test('Binary Search Testing', () => {
    // checking element index 
    expect(Algo.BinarySearch([1,2,3,32,45,56],3).index).toBe(2)
    expect(Algo.BinarySearch([1,2,3,32,45,56],100).index).toBe(-1)
    // checking element Boolean
    expect(Algo.BinarySearch([1,2,3,32,45,56],32).isBool).toBe(true)
    expect(Algo.BinarySearch([1,2,3,32,45,56],60).isBool).toBe(false)
    // checking return element
    expect(Algo.BinarySearch([1,2,3,32,45,56],45).value).toBe(45)
    expect(Algo.BinarySearch([1,2,3,32,45,56],50).value).toBe("Not Found")
})

// Jump Searching for indexing, isBool and same element return
// Array must be in sorted format
test('Jump Search Testing', () => {
    // checking element index 
    expect(Algo.JumpSearch([1,2,3,32,45,56],45).index).toBe(4) //if element will be found at position
    expect(Algo.JumpSearch([1,2,3,32,45,56],100).index).toBe(-1) // if element will not be found at position and returns -1
    // checking element Boolean
    expect(Algo.JumpSearch([1,2,3,32,45,56],32).isBool).toBe(true)
    expect(Algo.JumpSearch([1,2,3,32,45,56],50).isBool).toBe(false)
    // checking return element
    expect(Algo.JumpSearch([1,2,3,32,45,56],32).value).toBe(32)
    expect(Algo.JumpSearch([1,2,3,32,45,56],50).value).toBe("Not Found")
})

// Exponential Searching for indexing, isBool and same element return
// Array must be in sorted format
test('Exponential Search Testing', () => {
    // checking element index 
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],3).index).toBe(2)
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],100).index).toBe(-1)
    // checking element Boolean
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],32).isBool).toBe(true)
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],60).isBool).toBe(false)
    // checking return element
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],32).value).toBe(32)
    expect(Algo.ExponentialSearch([1,2,3,32,45,56],50).value).toBe("Not Found")
})

// Quick Sorting Testing
test('Quick Sort Testing', () => {
    expect(Algo.QuickSort([9, 0, 2, 7, -2, 6, 1 ])).toEqual([-2,0,1,2,6,7,9])  // checking for numbers
    expect(Algo.QuickSort(['a','c','b'])).toEqual(['a','b','c'])  // checking for characters only
    expect(Algo.QuickSort(['prakash','aditya','aaditya','rahul'])).toEqual(['aaditya','aditya','prakash','rahul'])  //checking for the strings
})

// Bubble Sorting Testing

test('Bubble Sort Testing', () => {
    expect(Algo.BubbleSort([9, 0, 2, 7, -2, 6, 1])).toEqual([-2,0,1,2,6,7,9])
    expect(Algo.BubbleSort(['a','c','b'])).toEqual(['a','b','c'])
    expect(Algo.BubbleSort(['prakash','aditya','aaditya','rahul'])).toEqual(['aaditya','aditya','prakash','rahul'])  //checking for the strings
})

// Merge Sorting Testing

test('Merge Sort Testing', () => {
    expect(Algo.MergeSort([4,7,5,9,1,3,8,2])).toEqual([1,2,3,4,5,7,8,9])
    expect(Algo.MergeSort(['a','c','b'])).toEqual(['a','b','c'])
    expect(Algo.MergeSort(['prakash','aditya','aaditya','rahul'])).toEqual(['aaditya','aditya','prakash','rahul'])  //checking for the strings
})

// Insertion Sorting Testing

test('Insert Sort Testing', () => {
    expect(Algo.InsertionSort([0,-3,5,8,2,7,6])).toEqual([-3,0,2,5,6,7,8])
    expect(Algo.InsertionSort(['a','c','b'])).toEqual(['a','b','c'])
    expect(Algo.InsertionSort(['prakash','aditya','aaditya','rahul'])).toEqual(['aaditya','aditya','prakash','rahul'])  //checking for the strings
})