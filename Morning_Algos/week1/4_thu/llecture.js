// Objects - Data Structure
// Arrays

//         
var a = 12;
var b = 43;
var c = 10;
//         0 ,1, 2, 3, 4
var arr = [12,43,10,5,49]

arr.length // 5
arr[2] // 10
arr[10-7] // 5
arr[arr.length - 2] // 5


// dictionaries
// libraries
// objects
// key : values pairs


var obj = {
    'firstName': 'bob',
    'lastName': 'vance',
    'siblings': {
        'brothers': [
            {
                'firstName': 'stanley'
            },
            {
                'firstName': 'ed'
            }
        ],
        'sisters': [
            {
                'firstName': 'angela',  // obj['siblings]['sisters'][0]['firstName] -> angela
            },
            {
                'firstName' : 'phillis'
            }
        ]
    }
};




obj['firstName'] // bob
obj['lastName']  // vance
obj['siblings'][2] // phillis
obj['siblings'][0] // michael




