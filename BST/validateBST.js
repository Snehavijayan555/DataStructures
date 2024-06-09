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

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
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

    isBST(node = this.root, min = null, max = null) {
        if (node === null) {
            return true;
        }

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);

console.log(bst.isBST()); // Should return true if the tree is a valid BST

const notBst = new BinarySearchTree();
notBst.root = new Node(10);
notBst.root.left = new Node(5);
notBst.root.right = new Node(20);
notBst.root.left.left = new Node(1);
notBst.root.left.right = new Node(12); // This makes it invalid as 12 > 10

console.log(notBst.isBST()); // Should return false since the tree is not a valid BST
