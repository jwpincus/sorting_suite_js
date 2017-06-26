var assert = require('chai').assert;
var bubbleSort = require('../bubble_sort');
var insertionSort = require('../insertion_sort')

describe("A method that can sort (using bubble sort)", function(){
  it("when given an array of characters it will sort them", function(){
    assert.deepEqual(bubbleSort(["a","c","v","b"]), ["a", "b", "c", "v"]);
  });
});
describe("A method that can sort (using bubble sort)", function(){
  it("when given an array of numbers it will sort them", function(){
    assert.deepEqual(bubbleSort([4,76,23,123,6,3,7,122]), [ 3, 4, 6, 7, 23, 76, 122, 123 ]);
  });
});
describe("A method that can sort (using insertion sort)", function(){
  it("when given an array of characters it will sort them", function(){
    assert.deepEqual(insertionSort(["a","c","v","b"]), ["a", "b", "c", "v"]);
  });
});
describe("A method that can sort (using insertion sort)", function(){
  it("when given an array of numbers it will sort them", function(){
    assert.deepEqual(insertionSort([4,76,23,123,6,3,7,122]), [ 3, 4, 6, 7, 23, 76, 122, 123 ]);
  });
});
