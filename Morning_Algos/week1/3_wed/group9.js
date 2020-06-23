
/* 
Predict the output:

TEAM MEMBERS:  Clint
Milan
Parker Brown

*/
function a(arr) {
    b = arr.length;
    var temp = arr[b - 1]; // last position in arr
    arr[b - 1] = arr[0]; // replaces last position in arr with fist position in arr
    arr[0] = temp; // replaces first position in arr with temp value
    return arr;
  }
  
  console.log(a([1, 2, 3]));
  //[3, 2, 1]
  console.log(a([2, 4]));
  //[4, 2]
  // output: ?
  
  
  
  // 2
  function bar(arr){
    var x = arr.length;
    //        1      2 (half of arr.length)     3
    for( var i =0; i<x/2; i++){
      var temp = arr[x-i-1];  // 4  // stores arr [position value] in var temp
      arr[i] = arr[x-i-1];    // 5  // arr [current i value] = arr position
      arr[x-i-1] = temp;      // 6  //arr [position value] = temp
    }
    return arr;
  }
  console.log(bar([1,2,3]));
  //[3, 2, 3]                 
  console.log(bar([1,2,3,4,5,6,7,8]));
  //[8, 7, 6, 5, 5, 6, 7, 8]
  // output: ?

  //