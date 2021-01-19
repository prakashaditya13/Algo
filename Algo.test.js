const { test, expect } = require('@jest/globals')
const Algo = require('./src/Algo')

// Linear Searching for index, isBool and return same element
test('Linear Search Testing', () => {
    // checking element index 
    expect(Algo.LinearSearch([1,2,3,45,32,56],3).index).toBe(2)
    expect(Algo.LinearSearch([1,2,3,45,32,56],100).index).toBe(-1)
    // checking element Boolean
    expect(Algo.LinearSearch([1,2,3,45,32,56],32).isBool).toBe(true)
    // checking return element
    expect(Algo.LinearSearch([1,2,3,45,32,56],32).value).toBe(32)
})