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

    // Depth-First Search (DFS) Traversals

    // In-order Traversal
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value); // Process the current node
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order Traversal
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value); // Process the current node
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order Traversal
    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value); // Process the current node
        }
    }

    // Breadth-First Search (BFS) Traversal
    breadthFirstTraversal() {
        if (!this.root) return;

        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.value); // Process the current node

            if (current.left !== null) {
                queue.push(current.left);
            }

            if (current.right !== null) {
                queue.push(current.right);
            }
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("In-Order Traversal:");
bst.inOrderTraversal(bst.root);

console.log("\nPre-Order Traversal:");
bst.preOrderTraversal(bst.root);

console.log("\nPost-Order Traversal:");
bst.postOrderTraversal(bst.root);

console.log("\nBreadth-First Traversal:");
bst.breadthFirstTraversal();
