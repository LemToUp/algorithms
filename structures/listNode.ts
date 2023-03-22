export class ListNode {
  val: number;

  // eslint-disable-next-line no-use-before-define
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
