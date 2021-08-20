/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let l1 = head;
    let l2 = head;
    
    while (l2 && l2.next && l2.next.next) {
        l1 = l1.next;
        l2 = l2.next.next;
        
        if (l1 === l2) {
            return true;
        }
    }
    
    return false;
};

/*
I: head - a linked list of values
O: boolean
C: pos is -1 or a valid index in linked list
E: if empty
*/