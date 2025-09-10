//afiseaza indexul unde se afla elementul maxim din array

function printIndexOfMaxElem(arr)
{
    var max = arr[0];
    var maxIndex = 0;
    for(var i = 0; i <= arr.length -1; i++) {
        if
            (max < arr[i]) {
            max = arr[i];
            maxIndex = i;
        }
    }
    console.log("Elementul maxim este " + max + " si se gaseste la pozitia " + maxIndex);
}

printIndexOfMaxElem([1,4,23,122,33,1,651,1]);