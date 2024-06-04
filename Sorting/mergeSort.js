function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
        let rightArr=arr.slice(mid)
        return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr=[8,-2,20,4,-6]
console.log(mergeSort(arr));



// Using recursion
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// const arr = [8, -2, 20, 4, -6];
// console.log(mergeSort(arr));
