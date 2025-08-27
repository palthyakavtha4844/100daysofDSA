//1

let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 8;

function countPairs(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            // Found a valid pair
            console.log("Pair found:", arr[left], arr[right]);
            count++;
            left++;
            right--;
        } else if (sum < target) {
            // Need a bigger sum
            left++;
        } else {
            // Need a smaller sum
            right--;
        }
    }

    return count;
}

let totalPairs = countPairs(arr, target);
console.log("Total pairs:", totalPairs);


//2
let array = [0, 1, 0, 3, 12];

function moveZeroes(array) {
    let nonZeroIndex = 0; // pointer for non-zero elements

    // Step 1: Move non-zero elements forward
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            array[nonZeroIndex] = array[i];
            nonZeroIndex++;
        }
    }

    // Step 2: Fill remaining space with 0s
    while (nonZeroIndex < array.length) {
        array[nonZeroIndex] = 0;
        nonZeroIndex++;
    }

    return array;
}

let updatedArray = moveZeroes(array);
console.log("Updated Array:", updatedArray);


//3
