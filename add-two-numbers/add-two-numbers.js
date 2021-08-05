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
var addTwoNumbers = function(l1, l2) {
    // create a result list 
    // add the sum of the values for l1 and l2
        // if it is less than 10, we store that value in a node as "this.val" in result list
        // if it is greater than or equal to 10, we store the second digit in a node in the result list 
            // and keep track of the first digit - create a variable to to store this
        // set l1 and l2 to their next and keep going until next is null.. 
    
    let result = new ListNode(0);
    let current = result;
    let sum = 0;
    let carry = 0;
    
    while (l1 || l2 || sum > 0) {

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        
        current.next = new ListNode(sum);
        current = current.next;
        
        sum = carry;
        carry = 0;
    }
    
    return result.next;
};