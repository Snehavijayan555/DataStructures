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

    findSmallestAncestor(nodeValue) {
        const ancestors = [];

        let current = this.root;
        while (current !== null && current.value !== nodeValue) {
            ancestors.push(current.value);
            if (nodeValue < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        // If nodeValue is not found, return null
        if (current === null) return null;

        // Find the smallest ancestor from the ancestors array
        let smallestAncestor = null;
        for (let ancestor of ancestors) {
            if (smallestAncestor === null || ancestor < smallestAncestor) {
                smallestAncestor = ancestor;
            }
        }

        return smallestAncestor;
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

console.log("Smallest Ancestor of 3:", bst.findSmallestAncestor(3));   
console.log("Smallest Ancestor of 7:", bst.findSmallestAncestor(7));  
console.log("Smallest Ancestor of 12:", bst.findSmallestAncestor(12)); 
