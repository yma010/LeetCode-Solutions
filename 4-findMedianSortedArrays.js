// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

function findMedianSortedArrays(num1, num2){
  let newSortedArr = (num1.concat(num2)).sort();

  let med;
  
  if (newSortedArr.length % 2 !== 0) { //odd length
    med = Math.floor(newSortedArr.length / 2);
    return newSortedArr[med];
  } else { //even length
    med = newSortedArr.length / 2;
    let left = newSortedArr[med];
    let right = newSortedArr[med - 1];
    med = (left + right) / 2
    return med
  }
}

//Set 1
// nums1 = [1, 3]
// nums2 = [2]
// Expected Output = 2.0
//Set 2
// nums1 = [1, 2]
// nums2 = [3, 4]
// Expected Output = 2.5
//Set 3
// nums1 = [3]
// nums2 = [-2, -1]
// Expected Output = -1

function assert( actual, expected, testname){
  if (actual !== expected){
    return console.log( `Failed! + ${testname}`)
  } else {
    return console.log( "Passed!")
  }
}

assert(findMedianSortedArrays([3], [-2, -1]), -1, "Will properly sort and find median of a negative array")
assert(findMedianSortedArrays([1,3], [2]), 2.0, "Will find the median when array length is odd")
assert(findMedianSortedArrays([1,2], [3, 4]), 2.5, "Will find the median when array length is even")

// console.log(findMedianSortedArrays(nums1, nums2))

