"use strict";

/** Function accepts two `sorted arrays
 *  Returns a new array with values from both arrays sorted
 *  
 *  O(n + m) time and O(n + m) space
 */

function merge(arr1, arr2) {
  let mergedArr = [];
  let pointer1 = 0; // pointer for arr1
  let pointer2 = 0; // pointer for arr2

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      mergedArr.push(arr1[pointer1]);
      pointer1++;
    } else {
      mergedArr.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    mergedArr.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    mergedArr.push(arr2[pointer2]);
    pointer2++;
  }

  return mergedArr;
}


/** Given an array, function will sort the values in the array using the
 *  merge sort algorithm:
 *    - breaks up the array into smaller arrays: either empty or only 1 element
 *    - builds up a newly sorted array from the smaller arrays
 * 
 *  O(nlogn)
*/

function mergeSort(array) {
  // base case is when array is length of 0 or 1
  if (array.length <= 1) return array;

  // recursively break down array into smaller arrays
  let midpoint = Math.floor(array.length / 2);
  let half1 = array.slice(0, midpoint);
  let half2 = array.slice(midpoint);
  let arr1 = mergeSort(half1);
  let arr2 = mergeSort(half2);

  let sortedArr = merge(arr1, arr2);
  return sortedArr;
}

module.exports = { merge, mergeSort };