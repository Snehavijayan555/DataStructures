class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    findLargest(root) {
        while (root.right !== null) {
            root = root.right;
        }
        return root;
    }

    findSecondLargest(root) {
        if (!root || (!root.left && !root.right)) {
            return null; // Tree must have at least 2 nodes
        }

        let current = root;
        while (current) {
            // Case 1: Current node is the largest and has a left subtree
            // The second largest is the largest in that left subtree
            if (current.left && !current.right) {
                return this.findLargest(current.left);
            }

            // Case 2: Current node is parent of the largest node, and the largest node has no children
            // The current node is the second largest
            if (current.right && !current.right.left && !current.right.right) {
                return current;
            }

            current = current.right;
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

const secondLargestNode = bst.findSecondLargest(bst.root);
console.log(secondLargestNode ? secondLargestNode.value : "Tree does not have enough nodes"); 
