// Binary search
// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if (arr[middleIndex] < target) {
//             leftIndex = middleIndex + 1;
//         } else {
//             rightIndex = middleIndex - 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch([-5, 4, 6, 8, 9], 4));
// console.log(binarySearch([-5, 4, 6, 8, 9], 9));
// console.log(binarySearch([-5, 4, 6, 8, 9], 8));




// Recursive Binary Search
// function recursiveBinarySearch(arr,t){
//     return search(arr, t, 0, arr.length-1)
// }
// function search(arr , t , low , high){
//     if(low > high){
//         return -1
//     }
//     let middleIndex = Math.floor((low + high) / 2)
//     if(t === arr[middleIndex]){
//         return middleIndex
//     }
//     if(arr[middleIndex]<t){
//         return search(arr , t , middleIndex+1, high)
//     }
//     else{
//         return search (arr , t , low ,middleIndex-1 )
//     }
// }
// console.log(recursiveBinarySearch([-5,4,6,8,9],4))
// console.log(recursiveBinarySearch([-5,4,6,8,9],9))
// console.log(recursiveBinarySearch([-5,4,6,8,9],6))





//BINARY SEARCH - binary search using array of string
// const binarySearch = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
    
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             return mid; 
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1; 
//         }
//     }

//     return -1; 
// };
// const sortedStrings = ["apple", "banana", "cherry", "grape", "orange", "pineapple", "strawberry"];
// const targetString = "orange";

// const index = binarySearch(sortedStrings, targetString);

// if (index !== -1) {
//     console.log(`"${targetString}" found at index ${index}.`);
// } else {
//     console.log(`"${targetString}" not found in the array.`);
// }




// BINARY SEARCH -find the indices of 1st and last index of target element using binary search(string)
// const binarySearchFirstOccurrence = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;
//     let firstOccurrence = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             firstOccurrence = mid;
//             high = mid - 1;
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1;
//         }
//     }

//     return firstOccurrence;
// };

// const binarySearchLastOccurrence = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;
//     let lastOccurrence = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             lastOccurrence = mid;
//             low = mid + 1;
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1;
//         }
//     }

//     return lastOccurrence;
// };

// const sortedStrings = ["apple", "banana", "cherry", "orange", "orange", "orange", "strawberry"];
// const targetString = "orange";

// const firstIndex = binarySearchFirstOccurrence(sortedStrings, targetString);

// const lastIndex = binarySearchLastOccurrence(sortedStrings, targetString);

// if (firstIndex !== -1 && lastIndex !== -1) {
//     console.log(`First occurrence of "${targetString}" is at index ${firstIndex}.`);
//     console.log(`Last occurrence of "${targetString}" is at index ${lastIndex}.`);
// } else {
//     console.log(`"${targetString}" not found in the array.`);
// }




// BINARY SEARCH -find the indices of 1st and last index of target element using binary search(numbers)
// const binarySearchFirst = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let firstIndex = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             firstIndex = mid;
//             high = mid - 1; 
//         } else if (nums[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return firstIndex;
// };
// const binarySearchLast = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let lastIndex = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             lastIndex = mid;
//             low = mid + 1; 
//         } else if (nums[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return lastIndex;
// };

// const findFirstAndLastIndex = function(nums, target) {
//     const firstIndex = binarySearchFirst(nums, target);
//     const lastIndex = binarySearchLast(nums, target);
//     return [firstIndex, lastIndex];
// };

// const sortedNumbers = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8, 9];
// const targetNumber = 4;

// const [firstIndex, lastIndex] = findFirstAndLastIndex(sortedNumbers, targetNumber);

// if (firstIndex !== -1 && lastIndex !== -1) {
//     console.log(`First occurrence of ${targetNumber} is at index ${firstIndex}.`);
//     console.log(`Last occurrence of ${targetNumber} is at index ${lastIndex}.`);
// } else {
//     console.log(`Target ${targetNumber} not found in the array.`);
// }





// BINARY SEARCH-apply binary search on [9,7,3,2,-1,-11] (array is sorted in descending order)
// const binarySearchDescending = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             return mid; 
//         } else if (nums[mid] < target) {
//             high = mid - 1; 
//         } else {
//             low = mid + 1; 
//         }
//     }
//     return -1; 
// };
// const nums = [9, 7, 3, 2, -1, -11];
// const target = 2;

// const index = binarySearchDescending(nums, target);

// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }

