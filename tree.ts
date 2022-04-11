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
}
