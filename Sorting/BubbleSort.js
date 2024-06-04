// function bubbleSort(arr){
//     let swapped
//     do{ 
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
// }
// const arr=[-6 , 20 , 8 , -2 , 4]
// bubbleSort(arr)
// console.log(arr);



// using recursion

// function bubbleSort(arr, n = arr.length) {
//     if (n == 1) {
//         return;
//     }

//     let swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];  
//             swapped = true;
//         }
//     }

//     if (!swapped) {
//         return;
//     }

//     bubbleSort(arr, n - 1); 
// }

// const arr = [-6, 20, 8, -2, 4];
// bubbleSort(arr);
// console.log(arr);  





// navya
let arr = [29, 10, 14, 37, 14];

function bubbleSort(a) {
    for (let i = 0; i < a.length - 1; i++) { 
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j + 1] < a[j]) {
                [a[j + 1], a[j]] = [a[j], a[j + 1]]; 
            }
        }
    }
    return a;
}

console.log(bubbleSort(arr));
