"use strict";

/** Function sorts the values in the array using the BubbleSort algorithm
 *  Takes in an array
 *  Returns mutated, sorted array
 *  O(n^2)
 */

function bubbleSort(array) {
  for (let i=0; i<array.length; i++){
    for (let j=i+1; j<array.length; j++){
      if (array[i] > array[j]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }

  return array;
}

module.exports = bubbleSort;