// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// parameters - array of integers, a target intiger

// result : array of two integers which indentify the indexes of the array values that add up to the target 

// Examples: input: nums = [2,7,11,15], target = 9 output: [0,1]

// Pseudocode:  nested for loops to compare each value in the array against all other values to see if they add up to the target, then when they do, return the index of each value. 

// Complexity will be O(n) 2 




function twoSum(nums, target){
   
   for(let i=0; i< nums.length; i++){
       for(let j=i+1; j<nums.length ; j++){
            if( nums[i] + nums[j] === target) {
                 return [i , j]
            }
       }

   }


}

// less time complex
// Pseudocode: 
// cashing - storing data so it can used later
function twoSum(nums, target){
   
   let numObject = {};

   for(let i=0; i< nums.length; i++ ){
        let otherNum = target - nums[i]
        if (numObject[otherNum] !== undefined){
             return [numObject[otherNum], i ]
        }

        numObject[nums[i]] = i 
   }


}
