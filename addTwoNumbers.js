// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {

    // while loop to loop through each node in l1 and l2 
    // sum up each node in l1 with each node in l2
    // if the sum is larger than 9, assign the 10th digit to the variable 'carry' and assign the first digit to the variable digit
      let carry = 0 ;
      // variable previouNode keeps track of the previousNode
      let previousNode = new ListNode();
      const headNode = previousNode; 
      while(l1 || l2 || carry!==0 ){
      let val1 = 0; 
      let val2 = 0;
    
      if(l1){
        // if l1 is not null, update l1 to the next node 
        val1 = l1.val;
        l1 = l1.next
   
      }
   
      if(l2){
        val2 = l2.val;
        l2 = l2.next
      }
   
     let sum = val1 + val2 + carry;
   
    
    
     carry = Math.floor(sum/10);
       let digit = sum%10;  
       const currentNode = new ListNode(digit);
       previousNode.next = currentNode;
       previousNode = currentNode;
     // console.log(`${val1}, ${val2} = ${sum}`)
     console.log(digit)
   
    }
    return headNode.next; 
       
   };