function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (arr[mid] == target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

var arr = [1, 3, 4, 5, 7, 8, 9, 23, 231];
binarySearch(arr, 9);
console.log(binarySearch(arr, 9));
