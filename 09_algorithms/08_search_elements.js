//se da un nr x si sa se verifice daca exista intr un array

function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(findElement([2, 4, 6, 9, 12], 5)); //false
console.log(findElement([2, 4, 6, 9, 12], 9)); //true
