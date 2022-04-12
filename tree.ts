/**
 * Hierarchical data structure; unidirectional parent-child relation
 * Binary tree: each node can only have 0 1 2 children, each child can only have one parent
 * Perfect bt: each node two children, each level node number is equal to all nodes on all previous levels plus one (meaning that each level represents half of the all nodes unitl that level)
 */

class TreeNode {
  data: any;
  children: TreeNode[];

  constructor(data: any) {
    this.data = data;
    this.children = [];
  }

  add(data: any) {
    const node = new TreeNode(data);
    this.children.push(node);

    return this;
  }

  remove(data: any) {
    this.children = this.children.filter((n) => n.data !== data);
    return this;
  }
}

class Tree {
  root: TreeNode;

  constructor(data: any) {
    this.root = new TreeNode(data);
  }

  traverseBSF(fn: Function) {
    let nodes = [this.root];

    do {
      const node = nodes.shift();
      if (node.children) nodes.push(...node.children);
      fn(node);
    } while (nodes.length > 0);
  }

  getLevelWidths() {
    let levels = [0];
    let nodes = [this.root, "x"];

    while (nodes.length > 1) {
      const node = nodes.shift();
      if (typeof node !== "string") {
        levels[levels.length - 1]++;
        nodes.push(...node.children);
      } else {
        // It is 'x' - which represebts flag for level end
        levels.push(0);
        nodes.push("x"); // Put it back
      }
    }

    return levels;
  }
}

// Binary search tree
class BSTNode {
  data: any;
  left: BSTNode | null;
  right: BSTNode | null;

  constructor(data: any) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data: any) {
    if (data < this.data) {
      if (this.left) this.left.insert(data);
      else {
        const node = new BSTNode(data);
        this.left = node;
      }
    } else if (data > this.data) {
      if (this.right) this.right.insert(data);
      else {
        const node = new BSTNode(data);
        this.right = node;
      }
    }
  }
}

class BSTree {
  root: BSTNode;

  constructor(data: any) {
    this.root = new BSTNode(data);
  }
}

function isTreeBSTree(
  node: BSTNode, // should be generic type(instead of BST node) with left/right properties
  parentOfLeftNode: BSTNode | null = null,
  parentOfRightNode: BSTNode | null = null
) {
  if (parentOfLeftNode && parentOfLeftNode.data < node.data) return false;
  if (parentOfRightNode && parentOfRightNode.data > node.data) return false;

  if (node.left && !isTreeBSTree(node.left, node, parentOfRightNode))
    return false;
  if (node.right && !isTreeBSTree(node.right, parentOfLeftNode, node))
    return false;

  return true;
}

const node = new BSTNode(5);
node.insert(4);
node.insert(3);
node.insert(6);
node.insert(7);
console.log(node);
console.log(isTreeBSTree(node));
