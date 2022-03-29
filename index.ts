// 1. Reverse input
function reverseString(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;
  return str.split("").reverse().join("");
}

console.log(reverseString(""));
console.log(reverseString("wolfs"));

// 2. Check if string is palindromre
function isPalindrome(str: string) {
  if (str.length === 0 || str.trim().length === 0) return false;
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

console.log(isPalindrome("Noou"));
console.log(isPalindrome("Hannah"));

// 3. Reverse an integer
function reverseInteger(int: number) {
  if (Math.abs(int) < 10) return int;
  const reversed = int.toString().split("").reverse().join("");
  return Math.sign(int) * Number(reversed);
}

console.log(reverseInteger(2));
console.log(reverseInteger(123));

// 4. Find letter with maximum occurance in string
function getMaxChar(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  const splittedString = str.split("");
  let charsCounter = {};
  let maxChar = "";
  let maxCount = 0;

  splittedString.forEach((char) => {
    const count = char in charsCounter ? ++charsCounter[char] : 1;
    charsCounter[char] = count;

    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  });

  return maxChar;
}

console.log(getMaxChar("Jedan"));
console.log(getMaxChar("Annannnass"));

// 5. Chunk array in "n" chunks
function arrayToChunks(arr: any[], chunkSize: number) {
  if (arr.length <= chunkSize) return arr;

  let chunks = [];
  let chunkStartIndex = 0;

  do {
    chunks.push(arr.slice(chunkStartIndex, chunkStartIndex + chunkSize));
    chunkStartIndex += chunkSize;
  } while (chunkStartIndex < arr.length);

  return chunks;
}

console.log(arrayToChunks([1, 2, 3, 4], 4));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// 6. Check whether two strings are anagrams
function cleanString(str: string) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

function areAnagrams(str1: string, str2: string) {
  if (str1.length === 0 || str1.trim().length === 0) return false;
  if (str2.length === 0 || str2.trim().length === 0) return false;

  return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams("angel", "glean"));
console.log(areAnagrams("mixa", "wixa"));
console.log(areAnagrams("night", "thing"));

// 7. Capitalize first letter of each word in sentence
function capitalizeWords(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  const splitted = str.split("");
  const capitalized = splitted.map((char, ind) => {
    if (ind === 0) return char.toUpperCase();
    if (splitted[ind - 1] === " ") return char.toUpperCase();
    return char;
  });

  return capitalized.join("");

  // 2nd way
  let words = [];
  const splittedByWhiteSpace = str.split("");

  for (let word of splittedByWhiteSpace) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

console.log(capitalizeWords("winter is coming"));

// 8. Print "n" steps
function printSteps(n: number) {
  for (let i = 0; i < n; i++) {
    let step = "";
    for (let j = 0; j < n; j++) {
      const part = j <= i ? "#" : " ";
      step += part;
    }
    console.log(step);
  }
}

printSteps(2);
printSteps(3);
printSteps(4);

// 9. Print "n" steps using recursion
function printStepsRecursively(n: number, step = "", row = 0) {
  // Check the base case to stop execution
  if (row === n) {
    return;
  }

  // General cases
  if (step.length === n) {
    console.log(step);
    return printStepsRecursively(n, "", row + 1);
  }

  let part = step.length <= row ? "#" : " ";
  printStepsRecursively(n, step + part, row);
}

printStepsRecursively(2);
printStepsRecursively(3);
printStepsRecursively(4);

// 10. Print "n" levels pyramid
function printPyramid(n: number) {
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      let level = "";
      for (let j = 0; j < 2 * n - 1; j++) {
        let part = j >= n - 1 - i && j <= n - 1 + i ? "#" : " ";
        level += part;
      }
      console.log(level);
    }
  }
}
// 0123456
// xxx#xxx 0
// xx###xx 1
// x#####x 2
// ####### 3
printPyramid(1);
printPyramid(3);
printPyramid(5);

// 11. Count string vowels
function countVowels(str: string) {
  if (str.length === 0 || str.trim().length === 0) return str;

  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  str.split("").forEach((char) => {
    if (vowels.includes(char)) counter += 1;
  });

  console.log(counter);

  // Second way
  const matches = str.match(/[aeiou]/gi) ?? [];
  console.log(matches.length);
}

countVowels("Dejan");
countVowels("Milija");

// 12. Fibbonaci - resolve nth element in itterative way - [0,1,1,2,3,5,8,13...]
function fibbonaciIterattive(n: number) {
  if (n <= 2) {
    console.log(n);
  } else {
    // 1st way
    let fib = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }

    console.log(fib[fib.length - 1]);

    // 2nd way - more memory space efficient
    let first = 1;
    let second = 1;

    for (let i = 3; i < n; i++) {
      let temp = first;
      first = second;
      second = temp + second;
    }
    console.log(first + second);
  }
}

fibbonaciIterattive(3);
fibbonaciIterattive(7);

// 13. Fibbonaci wih recursion
function recursiveFibb(n: number) {
  if (n <= 1) return n;
  return recursiveFibb(n - 1) + recursiveFibb(n - 2);
}

console.log(recursiveFibb(3));
console.log(recursiveFibb(7));

// 14. Memory efficent recursive fibbonaci
function slowFibbonaci(n: number) {
  if (n <= 1) return n;
  return slowFibbonaci(n - 1) + slowFibbonaci(n - 2);
}

function memoizedFibbonaci(slow: Function) {
  let results = {};
  return (...args: number[]) => {
    const input = args[0];
    if (input in results) return results[input];

    const result = slow(input);
    results[input] = result;

    return result;
  };
}

const optimizedFibb = memoizedFibbonaci(slowFibbonaci);

console.log(optimizedFibb(6));
console.log(optimizedFibb(7));

// 15. Factorial with recursion - 5 => 5*4*3*2*1=120
function getFactorial(n: number) {
  if (n === 1) return 1;
  return n * getFactorial(n - 1);
}

console.log(getFactorial(6));

// 16. Check if number is prime number - 2,3,5,7,11 etc..
function isPrime(n: number) {
  if (n < 2) return false;

  const numSqrt = Math.floor(Math.sqrt(n));

  for (let i = 2; i < numSqrt; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(11));
console.log(isPrime(97));
console.log(isPrime(499));
console.log(isPrime(12));
console.log(isPrime(22));

// 17. Find two largest numbers in array
function getTwoLargest(list: number[]) {
  if (list.length <= 2) return list;

  let first = list[0];
  let second = list[1];

  for (let i = 0; i < list.length; i++) {
    const current = list[i];
    if (current > first) {
      let temp = first;
      first = current;
      second = temp;
    } else if (current > second) {
      second = current;
    }
  }

  return [first, second];
}

console.log(getTwoLargest([1, 7, 32, 3, 4, 4, 4, 34, 12, 3, 78]));

// 18. Queue - FIFO principle;
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

// 19. Stack - FILO principle
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

// 20. Linked list
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
