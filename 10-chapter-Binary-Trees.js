// Node class example for binary tree data structure
class Node {
  constructor(data, left = null, right = null) {
    this.data  = data;
    this.left  = left;
    this.right = right;
  }

  show() {
    console.log('Node ->', this.data);
  }
}

class BinaryTree {
  constructor(root = null, nodes = 0) {
    this.root     = root;
    this.numNodes = nodes;
  }

  insert(data) {
    const n = new Node(data);
    if(this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      while(!(current === null)) {
        let parent = current;
        if(data < current.data) {
          current = current.left;
          if(current === null) {
            parent.left = n;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = n;
          }
        }
      }
    }
    this.numNodes++;
  }

  inOrder(node) {
    if(!(node === null)) {
      this.inOrder(node.left);
      node.show();
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if(!(node === null)) {
      node.show();
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if(!(node === null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      node.show();
    }
  }

  get minValue() {
    let current = this.root;
    while (!(current.left === null)) {
      current = current.left;
    }
    return current.data;
  }

  get maxValue() {
    let current = this.root;
    while (!(current.right === null)) {
      current = current.right;
    }
    return current.data;
  }

  get totalNodes() {
    return this.numNodes;
  }

  totalEdges(node) {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
    else {
      return this.totalEdges(node.left) + this.totalEdges(node.right);
    }
  }

  find(data) {
    let current = this.root;
    while((current.data !== data)) {
      let parent = current;
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if(current === null) {
        return undefined;
      }
    }
    return current;
  }

  remove(data) {
    let current = this.root;

  }

}

// Implementation
// ####################################
const nums = new BinaryTree();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log("\nPreorder traversal: ");
nums.preOrder(nums.root);
console.log("\nPostorder traversal: ");
nums.postOrder(nums.root);
console.log(`Find value 45: `);
console.log(nums.find(45));
/*
  1. Add a function to the BST class that counts the number of nodes in a BST.
*/
console.log('\n\n### Exercise 1');
console.log(`Total of nodes: ${nums.totalNodes} `);
/*
  2. Add a function to the BST class that counts the number of edges in a BST..
*/
console.log('\n\n### Exercise 2');
console.log(`Total of edges: ${nums.totalEdges(nums.root)} `);
/*
  3. Add a max() function to the BST class that finds the maximum value in a BST.
*/
console.log('\n\n### Exercise 3');
console.log(`Get Max value of the tree: ${nums.maxValue} `);
/*
  4. Add a min() function to the BST class that finds the minimum value in a BST.
*/
console.log('\n\n### Exercise 4');
console.log(`Min value of the tree: ${nums.minValue}`);
