// //problem:
//  //Find All Unique Triplets That Sum to Zero

// function findThreeSum(arr){
//     const result = [];
//     arr.sort((a,b) => a -b);
//     for(i=0;i<arr.length - 2;i++){
//         if(i>0 && arr[i]==arr[i-1]) continue ;
//             left = i + 1;
//             right = arr.length - 1;
//             while(left < right){
//                const total = arr[i] + arr[left] + arr[right];
//                 if(total == 0){
//                     result.push([arr[i],arr[left],arr[right]]);
//                     while(left < right && arr[left] == arr[left + 1]) left++;
//                          while(left < right && arr[right] == arr[left - 1]) right--;
//                         left++;
//                         right--;
//                 }else if(total < 0){
//                    left++;
//                 }else{
//                    right--;
//                 }
//             }
//     }
//     return result
// }
// console.log(findThreeSum([-1, 0, 1, 2, -1, -4]));




// sliding window sum
function slidingWindow(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(slidingWindow([2, 3, 4, 5, 6], 2));