function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (left < right) {
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    } else if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
    mid = Math.floor((right + left) / 2);
  }
  return 0;
  
}

module.exports = findRotationCount