function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (left < right) {
    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid;
    }
    mid = Math.floor((right + left) / 2);
  }
  return arr.length - left;
}

module.exports = countZeroes