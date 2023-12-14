function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (left < right) {
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      if (arr[right] < num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[left] > num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    mid = Math.floor((right + left) / 2);
  }
  return -1;
 
}

// module.exports = findRotatedIndex