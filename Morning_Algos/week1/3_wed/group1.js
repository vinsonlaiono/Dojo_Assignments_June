/* 
Predict the output:

TEAM MEMBERS:  sean, carolina, kenny, jeff

*/
function a([2,4]) {
    b = arr.length; b=2
  var temp=4
    var temp = arr[b - 1];
    arr[b-1] = arr[0]; 
    // arr[1]=arr[0]
    arr[0] = temp;
    return arr;
  }
  
  console.log(a([1, 2, 3]));
  console.log(a([2, 4]));
  
  // output: ?
  

  //  [3,2,1]
  //   [4,2]
  
  // 2
  function bar(arr){
    // bar[8,7,3,4,5,6,6,7]
    
    var x = arr.length;
    // var x= 8
    
    
    for( var i =1; i<x/2; i++){
      var temp = arr[x-i-1];
      // var temp=6
      arr[i] = arr[x-i-1];
      // arr[1]=arr[6]
      // [8,2,3,4,5,6,7,7]
      arr[x-i-1] = temp;
    }
    return arr
  }
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  
  // output: ?
  // [3,2,3]
  // [8,7,6,5,5,6,7,8]