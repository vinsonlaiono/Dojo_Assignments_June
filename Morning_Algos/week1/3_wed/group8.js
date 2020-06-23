
/* 
Predict the output:

TEAM MEMBERS: Benjamin, Roy, Bucky

*/
function a(arr) {
    b = arr.length;
  
    var temp = arr[b - 1];
    arr[b - 1] = arr[0];
    arr[0] = temp;
    return arr;
  }
  console.log(a([1, 2, 3]));
  console.log(a([2, 4]));
  
  // output: 
  // [3, 2, 1]
  // [4, 2]
  
  // 2
  function bar(arr){
    var x = arr.length;
    
    for( var i =0; i<x/2; i++){
      var temp = arr[x-i-1];
      arr[i] = arr[x-i-1];                // More simply: arr[i] <- arr[x-1-i]     
      arr[x-i-1] = temp;
    }
    return arr
  }
  //               0 1 2
  console.log(bar([1,2,3]))
  //              [3,2,3]
  //
  //               0 1 2 3 4 5 6 7
  console.log(bar([1,2,3,4,5,6,7,8]))
  //              [8,7,6,5,5,6,7,8]
  // output: ?
  // [3,2,3]
  // [8,7,6,5,5,6,7,8]
  
  
  /*
  // x = 3

  // i = 0
  // x - 1 - i = 2
  // temp = arr[2] = 3
  // arr[0] <- 3
  // arr[2] <- 3

  // [3,2,3]


  // i = 1 < (3 / 2) = 1.5
  // x - 1 - i = 1
  // temp = arr[1] = 2
  // arr[1] <- arr[1]
  // arr[1] <- 2

  // i = 2 > (3/2)
  // loop stops
  */

  /*
    x = 8
    (x/2) = 4
    i goes for 0 1 2 3 ...

    i = 0:
    ...
    arr[0] <- arr[7] (which is 8)
    
    i = 1:
    arr[1] <- arr[6] (which is 7)

    i = 2:
    arr[2] <- arr[5] (which is 6)

    i = 3:
    arr[3] <- arr[4] (which is 5)
  */
