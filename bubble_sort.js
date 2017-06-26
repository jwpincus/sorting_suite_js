function bubbleSort(array){
  // take the first thing in the array and compare it to the next, swap if necessary
  var swap = 0;
  var index = 0;
  var temp = null;
  while(true){
    if (array[index] > array[index + 1]){
      temp = array[index + 1];
      array[index + 1] = array[index];
      array[index] = temp;
      swap++;
    }
    index++;
    if (index == (array.length - 1) && !swap){
      return array;
    } else if (index == (array.length - 1)){
      index = 0;
      swap = 0;
    }
  }
  // return array;
  // take the second thing and compare it to the next, swap if necessary
  // continue until end of array
  //stop when swaps are no longer happening
}
module.exports = bubbleSort;
