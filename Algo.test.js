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

test('Binary Search Testing', () => {
    // checking element index 
    expect(Algo.BinarySearch([1,2,3,45,32,56],3).index).toBe(2)
    expect(Algo.BinarySearch([1,2,3,45,32,56],100).index).toBe(-1)
    // checking element Boolean
    expect(Algo.BinarySearch([1,2,3,45,32,56],32).isBool).toBe(true)
    expect(Algo.BinarySearch([1,2,3,45,32,56],60).isBool).toBe(false)
    // checking return element
    expect(Algo.BinarySearch([1,2,3,45,32,56],32).value).toBe(32)
    expect(Algo.BinarySearch([1,2,3,45,32,56],50).value).toBe("Not Found")
})

// Jump Searching for indexing, isBool and same element return
// Array must be in sorted format
test('Jump Search Testing', () => {
    // checking element index 
    expect(Algo.JumpSearch([1,2,3,32,45,56],45).index).toBe(4)
    expect(Algo.JumpSearch([1,2,3,32,45,56],100).index).toBe(-1)
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