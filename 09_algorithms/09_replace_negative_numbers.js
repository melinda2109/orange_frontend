//se da un array cu nr pozitive si nr negative, sa se modifice array ul a.î. nr negative saa fie modulul lor
//ex: -1,3,8,-2,-9 => 1 3 8 2 9

function returnPositive(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = arr[i] * -1;
    }
  }
  //return arr;
}
var arr = [1, 2, -7, -8];
returnPositive(arr);
console.log(arr);
