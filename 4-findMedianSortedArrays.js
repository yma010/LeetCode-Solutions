// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

function findMedianSortedArrays(num1, num2){
  let newSortedArr = (num1.concat(num2)).sort();
  let med;
  if (newSortedArr.length % 2 !== 0) { //odd length
    med = Math.floor(newSortedArr.length / 2);
    console.log(med)
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
nums1 = [1, 2]
nums2 = [3, 4]
// Expected Output = 2.5

console.log(findMedianSortedArrays(nums1, nums2))

