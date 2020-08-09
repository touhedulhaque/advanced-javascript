
const nums = [1,2,3,4,5,6, 7, 8, 9, 10, 11];
// const part = nums.slice(2,5);

const removed = nums.splice(2,5,12);
// console.log(removed);
// console.log(nums);

const together = nums.join(", ");
console.log(together);