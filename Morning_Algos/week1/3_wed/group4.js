/* 
Predict the output:

TEAM MEMBERS:  

*/
function a(arr) {
    b = arr.length;
  
    // right side = to the left side
    
    var temp = arr[b - 1];
        
    arr[b - 1] = arr[0]

    arr[2] = 1
    1,2,1
    
    
    arr[0] = temp;
    arr[0] = 3
    3,2,1
    

    return arr;
  }
                 0,1,2
  console.log(a([1, 2, 3]));
                 
  console.log(a([2, 4]));
  
  // output: ?
  1) arr[3,2,1];  
  
  2) arr[4,2];
  
  
  
  // 2
  function bar(arr){
    var x = arr.length;
    
    for( var i =0; i<x/2; i++){
      var temp = arr[x-i-1];
      arr[i] = arr[x-i-1];
      arr[x-i-1] = temp;
    }
    return arr
  }
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  
  // output: ?
  1) 3,2,3
  2) 8,2,3,4,5,3,2,8






