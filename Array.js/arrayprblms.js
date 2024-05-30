
// ARRAY- Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array([3,0,1], n = 3)
// function missingNumber(nums){
//     for(let i=0;i<nums.length;i++){
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// }
// const nums=[3,0,1]
// let res=missingNumber(nums)
// console.log(res);



// ARRAY -Find repeated integers equivalent to number in array
// const findRepeatedEquivalentNumbers = function(nums, number) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         if (currentNum === number) {
//             let isRepeated = false;
//             for (let j = 0; j < i; j++) {
//                 if (nums[j] === currentNum) {

//                     isRepeated = true;
//                     break; 
//                 }
//             }
//             if (isRepeated) {
//                 result.push(currentNum);
//             }
//         }
//     }

//     return result;
// };

// const nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const numberToMatch = 4;
// const repeatedEquivalentNumbers = findRepeatedEquivalentNumbers(nums, numberToMatch);
// console.log("Repeated numbers equivalent to", numberToMatch + ":", repeatedEquivalentNumbers);





// ARRAY-Find numbers disappeared in array
// const findDisappearedNumbers = function(nums) {
//     const n = nums.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         const index = Math.abs(nums[i]) - 1;
//         if (nums[index] > 0) {
//             nums[index] = -nums[index]; 
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > 0) {
//             result.push(i + 1);
//         }
//     }
//     return result;
// };
// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const disappearedNumbers = findDisappearedNumbers(nums);
// console.log("Numbers disappeared in the array:", disappearedNumbers);



// find frequency of numbers in a array
// function findFrequency(nums) {
//     const frequencyMap = {};

//     for (let num of nums) {
//         if (frequencyMap[num]) {
//             frequencyMap[num]++; 
//         } else {
//             frequencyMap[num] = 1; 
//         }
//     }

//     return frequencyMap;
// }

// const nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const frequency = findFrequency(nums);
// console.log(frequency);