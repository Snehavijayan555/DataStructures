// Linear Search
// function linearSearch(arr,target){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//         return -1
// }
// console.log(linearSearch([5,4,10,8,7],10))
// console.log(linearSearch([5,4,10,8,7],7))
// console.log(linearSearch([5,4,10,8,7],4))






// RECURSION-LINEAR SEARCH
// function linearSearchRecursive(arr, target, i = 0) {
//     if (i >= arr.length) {
//         return -1;
//     }
//     if (arr[i] === target) {
//         return i;
//     }
//     return linearSearchRecursive(arr, target, i + 1);
// }
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 10)); 
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 7)); 
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 4)); 