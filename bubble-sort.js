const bubbleSort = (nums) => {
    const sortedNums = nums;
    let passes = 0;
    let comparisons = 0;
    let swaps = 0;
    let temp = 0;

    // do as many passes as it takes for there to be no swaps
    do {
        passes += 1;
        console.log(`pass ${passes}`);
        swaps = 0;
        // compare each element to its neighbor
        for(let j = 0; j < nums.length - 1; j++) {
            comparisons += 1;
            console.log('comparison', j + 1);
            // if they're not sorted (ascending), swap them
            if (nums[j] > nums[j + 1]) {
                temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;

                swaps += 1;
                console.log(`swapped ${nums[j]} and ${nums[j + 1]}!`);
            }
        }
    } while (swaps > 0);

    console.log(`
        For an array of length: ${nums.length},
        We did ${passes} passes
        with a total of ${comparisons} comparisons.
    `);

    return sortedNums;
};

// console.log(bubbleSort([40, 10, 20, 50, 30]));
// console.log(bubbleSort([-2, -3, -1, 1, 0]));

console.log(bubbleSort([2, 1, 4, 3, 5, 50, 90, 7, -4, 80, 56, 39, 12, 68 , 49, 99]));
