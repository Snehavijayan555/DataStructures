// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left) , pivot , ...quickSort(right)]
// }
// const arr=[8,20,-2,4,-6]
// console.log(quickSort(arr));



// using recursion
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const left = arr.filter((el, index) => el < pivot);
    const right = arr.filter((el, index) => el >= pivot && index !== arr.length - 1);
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));

