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

    findClosestValue(target, root = this.root, closest = null) {
        if (root === null) {
            return closest;
        }
        if (closest === null || Math.abs(root.value - target) < Math.abs(closest - target)) {
            closest = root.value;
        }
        if (target < root.value) {
            return this.findClosestValue(target, root.left, closest);
        } else if (target > root.value) {
            return this.findClosestValue(target, root.right, closest);
        } else {
            return closest;
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);

const target = 12;
console.log(bst.findClosestValue(target));
