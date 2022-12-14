////////////////////////
//Find the Median
////////////////////////
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number.
//  In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const mid = Math.floor(nums.length / 2);
const value = nums[mid];

console.log(value);