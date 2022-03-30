// Linked list
/**
 * head and tail node
 * prepend O(1), append O(1), lookup O(n), insert O(n), delete O(n)
 * advantage over hassh tables is that element pointers are in some way ordered(sorted) since each points to next one while in hassh keys all are randomly scattered in memory
 * linked lists can solve collision in hash tables (store values under same key in linked list)
 */
class LNNode {
  data: any;
  next: LNNode | null;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: LNNode | null;
  tail: LNNode;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data: any) {
    const node = new LNNode(data, this.head);
    this.head = node;
    if (this.size === 0) this.tail = node;
    this.size++;
    return this;
  }

  insertLast(data: any) {
    const node = new LNNode(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    return this;
  }

  removeFirst() {
    if (this.head) this.head = this.head.next;
    return this;
  }

  removeLast() {
    if (this.tail) {
      let nextToLast = this.head;
      let counter = 1;

      while (counter < this.size - 1) {
        nextToLast = nextToLast.next;
        counter++;
      }
      nextToLast.next = null;
      this.tail = nextToLast;

      this.size--;
      return this;
    }
  }
}

let lnList = new LinkedList();
lnList.insertFirst(3);
lnList.insertFirst(2);
lnList.insertFirst(1);
lnList.insertLast(4);
lnList.insertLast(5);
lnList.insertLast(6);
lnList.insertLast(7);
console.log(lnList.removeLast());

function getMiddleNode(linkedList: LinkedList) {
  if (linkedList.size > 1) {
    // Using slow-fast strategy
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
  return linkedList.getFirst();
}

console.log(getMiddleNode(lnList));

function isLinkedListCircular(linkedList: LinkedList) {
  if (linkedList.size > 1) {
    let slow = linkedList.getFirst();
    let fast = linkedList.getFirst();

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = slow.next.next;
      if (slow === fast) return true;
    }
    return false;
  }
  return false;
}

function getNthNodeToLast(linkedList: LinkedList, n: number) {
  if (linkedList.size > 1 && n < linkedList.size) {
    let slow = linkedList.getFirst();
    let fast = slow;
    let counter = n;

    while (counter > 0) {
      fast = fast.next;
      counter--;
    }

    while (fast.next) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
  return null;
}
