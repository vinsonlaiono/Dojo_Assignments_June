/* Basic 13 Algorithms                                                          

TEAM MEMBERS: 

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  // code goes here
  for( var x=o; x<256; x++){
console.log(i)}
}

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
oupput: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  // code goes here
  for ( var x=1; x <=256; x=x +2){ 
    consol.log(x);}

}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  Var sum=0;
    for( var x=0; x <= 256; x +=1){
    sum=sum + x: 
    Console.log(x,sum) } 
}

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.

// Input array: [1,4,65,34,78]
// Output: 1, A4, 65, 34, 78
function printArrayVals(arr) {
  // code goes here
  for ( i = 0; i , arr.length; i++){
    // accessing each element of Array
    x = arr[i]:
    system.out.print (x + "")
    }
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
  // code goes here
  set max to Array[0]
    for( i=1 to ar.length - 1){
    if Array[i] > max then
    set max to array [i]
    endif
    endfor
    return -1
    }
}

// [-65,5,34]

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  // code goes here
  var avg;
  var sum=0;
  arr.forEach(function(elem){
  sum += elem;
  });
  avg = sum/arr.length;
  return avg;
  }
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  // code goes here
  var arr = [];
  var i=1;
  while(i <=255){ if(i%2===1)
    { arr.push(i); } 
    i++; } return arr;
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
  // code goes here
  var arr1 = arr.map(function(val){
    return val*val;
    });
    return arr1;
}


// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
  var count=0;
    arr.forEach(function(elem){
    if (elem>Y){
    count++;
    }
    });
    return count;
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
  var noneg = arr.map(function(elem){
    if (elem<0); {elem=0;} return elem; }); return noneg;
    
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
  var arrnew=[];
  var sum = 0;
  arr.forEach(function(elem){
  sum += elem;
  });
  arrnew.push(Math.max.apply(null,arr));
  arrnew.push(Math.min.apply(null,arr));
  arrnew.push(sum/arr.length);
  return arrnew;
}
// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr) {
  // code goes here
  const array1 = [1, 2, 3];
  const firstElement = array1.shift();

  console.log(array1);
  // expected output: Array [2, 3]

  console.log(firstElement);
  // expected output: 1
}
// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
  // [1,-4,-6,3,7,-3,34]
  // [1,"DOJO","DOJO",3,7,"DOJO",34]
}
