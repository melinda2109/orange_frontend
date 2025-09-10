//se da un array, sa se inv elementele arrayului fara a crea un alt array
//1 4 3 2 9 5 => 5 9 2 3 4 1

function reverseArray(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

var arr = [1, 4, 23, 122, 33, 1, 651, 1];
console.log(arr);
reverseArray(arr);
console.log(arr);
