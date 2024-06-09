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

    findSmallestParent() {
        if (this.root === null || (this.root.left === null && this.root.right === null)) {
            return null; // No parent exists if tree is empty or has only one node
        }

        let current = this.root;
        let parent = null;

        while (current.left !== null) {
            parent = current;
            current = current.left;
        }

        return parent;
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

const smallestParentNode = bst.findSmallestParent();
console.log(smallestParentNode ? smallestParentNode.value : "No parent for the smallest node"); 
