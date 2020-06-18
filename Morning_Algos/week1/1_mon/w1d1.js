// /*
// Variable Declarations
// */
// var foo = 100; // integers
// var name = "Bob"; // strings
// var hungry = true; // boolean
// var confusion = Infinity;
// var job = null;
// var job = undefined;

// // Data types
// // Operators

// var num1 = 10;

// var num2 = 5;

// var num3;
// num3 = num1 + num2; // 15
// num3 = num1 - num2; // 5
// num3 = num1 / num2; // 2
// num3 = num1 * num2; // 50
// num3 = num1 % num2; // 0  modulus

// // Conditional Structures

// if(num1 > num2){
//     console.log("yes vinson yes")
// } else {
//     console.log("NO")
// }

// if(num1 < num2){
//     console.log("yes vinson yes")
// }

// num1 == num2  // false
// num1 === num2 // false
// num1 === 10   // true
// 10 == "10"  // true
// 10 === "10" // false

// num1 != num2  // true
// num1 !== num2 // true

// num1 >= num2  // true
// num1 <= num2  // false

// // Repetative Structures
// i = i+1
// i += 5
// i++

//   1        2     4
// for(var i=0; i<5; ++i){
// //    3 
//    console.log('hi');
// }

// Function Declarations
//                     5  7
function sum(a, b, z){
    if(z === undefined){
        var c = a + b;
    } else {
        var c = a + b + z;
    }
    console.log(c);// shows the value
    return c; // give you the value
}

var num3 = sum(5, 7, 14) + sum(1, 2, 3)
var num4 = sum(2, 100)

console.log(num3 + num4)




// Arguments & Parameters










// Arrays    0,1,2,3,4,5,6,7,8,9
var myArr = [1,2,3,4,5,6,7,8,9,10];
var a = 3
var b = 5

//       1     2                4
for(var i=0; i<myArr.length/2; i++){
    //3 
    console.log(myArr[i]); // 1 -> 2 -> 3 -> 4... -> 10
}
console.log(i) // 10


// Pseudo Code
// Print all the values from 1 - 100;

// first create a for loop
// start i at 1
// end at 101
// increment by 1
// console log variable i

for(var i=1; i<=100; i++){
    console.log(i);
    console.log(1)
    console.log(2)
    console.log(3)
}


