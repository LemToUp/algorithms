/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
import { ListNode } from './structures/listNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const resultNode = new ListNode(0);
  let stepNode = resultNode;
  let balance = 0;

  while (l1 !== null || l2 !== null || balance !== 0) {
    let newVal = (l1?.val || 0) + (l2?.val || 0) + balance; // Calculate sum

    [balance, newVal] = (newVal > 9) ? [1, newVal % 10] : [0, newVal]; // Handle balance

    stepNode.next = new ListNode(newVal); // Save result
    stepNode = stepNode.next; // Move to next node

    l1 = l1 ? l1.next : null; // Move to next l1 node
    l2 = l2 ? l2.next : null; // Move to next l2 node
  }

  return resultNode.next;
}
