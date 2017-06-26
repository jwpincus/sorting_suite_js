function insertionSort(array){
  var length = array.length;
  var sortedArray = [];
  sortedArray.push(array.pop());
  var i = 0;
  var element = array.pop();
  while(sortedArray.length < length){
    if(sortedArray[i] < element){
      i++;
    } else {
      sortedArray.splice(i, 0, element);
      i = 0;
      element = array.pop();
    }
  }
  return sortedArray
}
module.exports = insertionSort;
