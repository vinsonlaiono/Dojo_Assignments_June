/* Basic 13 Algorithms                                                          

TEAM MEMBERS: kyle, Mark, 

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  for (var i = 1; i < 256; i++) console.log(i);
}

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
oupput: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  for (var i = 1; i <= 255; i++) {
    if (i % 2 == 1) {
      console.log(i);
    }
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum += i;
    console.log(i, sum);
  }
}

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.

// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) console.log(arr[i]);
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}

// [-65,5,34]

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  var avg = 0,
    sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum/arr.length;
  }
  console.log(avg);
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  var newArr = []; //declare and create the new array
  for (var i=1; i<=255; i++) { //grabbing intergers from 1-255
    if (i%2 == 1) { // filtering the odd integers
      newArr.push();  //whatever odd number from filter if statement added to newArr created.
    }
  }
  console.log(newArr);
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
   (var i=0; i<arr.length); i++) {
    arr[i]= arr[i]*arr[i];
  }
  console.log(arr;)
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  var y = 0;
  for (var i=0; i<arr.length; i++) {
    if (arr[i] > y) {
      console.log(arr[i]);
    }
  }
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i]<0) {
      arr[i] = 0;
    }
  }
  console.log(arr[i]);
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {       
  var Avg = 0, Sum=0;
  var Max = arr[0], Min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    Sum;+= arr[i];
    Avg = Sum/arr.length;
    if (Max<arr[i]) {
      Max = arr[i];
    }
    else if (Min>arr[i]) {
      Min = arr[i];
    }
  }
  console.log(Max, Min, Avg);  
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr) {
  console.log("Given Array Value", arr);
  for (var i=0; i<arr.length; i++) {
    if (arr[i] == arr[0]) {
      arr.pop(arr[0]);
    }
    else if (arr[i] == arr[arr.length-1]) {
      arr.push(0);
    }
    else arr.push();
  }
  console.log("New Array Value", arr);
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  for (var i=0; i<arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  console.log(arr);or(var i=0; i<arr.langth; i++){
    if(arr[i])
  }
  // [1,-4,-6,3,7,-3,34]
  // [1,"DOJO","DOJO",3,7,"DOJO",34]
}
