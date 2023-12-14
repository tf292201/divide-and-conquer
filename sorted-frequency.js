function sortedFrequency(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  while (left < right) {
    if (arr[mid] === num) {
      left = mid;
      right = mid;
      while (arr[left] === num) {
        left--;
      }
      while (arr[right] === num) {
        right++;
      }
      return right - left - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
    mid = Math.floor((right + left) / 2);
  }
  return -1;

}

module.exports = sortedFrequency