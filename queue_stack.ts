// Queue - FIFO principle;
/**
 * Linear data structure - allowing to traverse sequentilly(accessing one by one element)
 * Similar to arrays but with limited operations - we can only work with first or last element in data structure
 * Can be implemented either with array or with linked list as internal data structure
 * Operations: enqueue(add), dequeue(remove), peek(get first element), lookup(not often used - O(n))
 * Using array as internal data structure is bad idea because with dequeue we need to remove first element from the array, and with array it means we need to shift whole array in order to remove first one, leading us to O(n) operation
 */

class LNQueueNode {
  data: any;
  next: LNQueueNode;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LNQueue {
  first: LNQueueNode;
  last: LNQueueNode;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(data: any) {
    if (this.size === 0) {
      const node = new LNQueueNode(data);
      this.first = node;
      this.last = node;
    } else {
      const node = new LNQueueNode(data);
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (this.size > 0) {
      if (this.first === this.last) {
        this.last = null;
        this.size--;
        return this;
      }

      this.first = this.first.next;
      this.size--;
      return this;
    }
  }
}

const lnQueue = new LNQueue();
lnQueue.enqueue(1);
lnQueue.enqueue(2);
lnQueue.enqueue(3);
console.log("After enqueue", lnQueue);
lnQueue.dequeue();
lnQueue.dequeue();
console.log("After dequeue", lnQueue);

class ArrQueue {
  data: any[];

  constructor() {
    this.data = [];
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  enqueue(data: any) {
    this.data.push(data);
    return this;
  }

  dequeue() {
    this.data.shift();
    return this;
  }
}

const arrQueue = new ArrQueue();
arrQueue.enqueue(1);
arrQueue.enqueue(2);
arrQueue.enqueue(3);
console.log("After enqueue", arrQueue);
arrQueue.dequeue();
arrQueue.dequeue();
console.log("After dequeue", arrQueue);

// Stack - FILO principle
/**
 * Linear data structure, same as queue
 * Operations: push, pop, peek, lookup(not often used)
 * The linked list versions have better worst-case behavior, but may have a worse overall runtime because of the number of allocations performed. The array versions are slower in the worst-case, but have better overall performance if the time per operation isn't too important
 */
class ArrayStack {
  data: any[];
  constructor() {
    this.data = [];
  }

  push(record: any) {
    this.data.push(record);
    return this;
  }

  pop() {
    this.data.pop();
    return this;
  }

  peek() {
    if (this.data.length > 0) return this.data[this.data.length - 1];
  }
}

const arrstack = new ArrayStack();
console.log(arrstack.push(1));
console.log(arrstack.push(2));
console.log(arrstack.push(3));
console.log(arrstack.pop());
console.log(arrstack.peek());

class LNStackNode {
  data: any;
  next: LNStackNode | null;

  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Top down direction when inserting new one, like this pop will be much faster because we will not need to perform lookup for next-to-the-last node, instead just remove top .next reference
/**
 *    3
 *    |    .next on 3 refers to 2
 *    2
 *    |    .next on 2 refers to 1
 *    1
 */
class LNStack {
  top: LNStackNode;
  bottom: LNStackNode;
  size: number;

  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(data: any) {
    const node = new LNStackNode(data);
    if (this.size === 0) {
      this.bottom = node;
      this.top = node;
    } else {
      const holding = this.top;
      this.top = node;
      this.top.next = holding;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size > 0) {
      const nextToTop = this.top.next;
      this.top = nextToTop;
      this.size--;
      return this;
    }
  }

  peek() {
    return this.top;
  }
}

let lnStack = new LNStack();
console.log(lnStack.push(1));
console.log(lnStack.push(2));
console.log(lnStack.push(3));
console.log(lnStack.pop());
console.log(lnStack.pop());
console.log(lnStack.peek());
