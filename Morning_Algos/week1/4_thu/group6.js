/* Basic 13 Algorithms                                                          

TEAM MEMBERS: 

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  for ()
}

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
oupput: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  // code goes here
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  var runningSum = 0;
  for (var i = 0; i <= 255; i++){ 
    runningSum += i;
    runningSum = runningSum + i;
    console.log(i);
    console.log(runningSum);
  }
}   










// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// can you see this
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
//-- we need to establish the values of the array as a function.--//

function printArrayVals(arr){
  for (var i=0; <=arr.length  i; i++=){
    console.log(arr[i])
  }
}

printArrayVals([1,4,65,34,78])


// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element.
function PrintMaxOfArray(arr) {
  // code goes here

}

// [-65,5,34]

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
function PrintAverageOfArray(arr) {
  // code goes here
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function ReturnOddsArray1To255() {
  // code goes here
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function SquareArrayVals(arr) {
  // code goes here
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
}
// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function ShiftArrayValsLeft(arr) {
  // code goes here
}
// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
  // [1,-4,-6,3,7,-3,34]
  // [1,"DOJO","DOJO",3,7,"DOJO",34]
}
