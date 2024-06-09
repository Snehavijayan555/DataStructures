class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areTreesEqual(root1, root2) {
    if (root1 === null && root2 === null) {
        return true; // Both trees are empty
    }

    if (root1 === null || root2 === null) {
        return false; // One tree is empty while the other is not
    }

    if (root1.value !== root2.value) {
        return false; // Values of corresponding nodes are not equal
    }

    // Recursively check left and right subtrees
    return (
        areTreesEqual(root1.left, root2.left) && areTreesEqual(root1.right, root2.right)
    );
}


const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);

console.log("Are trees equal?", areTreesEqual(tree1, tree2)); 
