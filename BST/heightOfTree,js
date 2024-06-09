class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function treeHeight(root) {
    if (root === null) {
        return 0; 
    }

    // Recursively find the height of the left and right subtrees
    const leftHeight = treeHeight(root.left);
    const rightHeight = treeHeight(root.right);

    // Height of the tree is the maximum of left and right subtree heights plus 1 (for the root node)
    return Math.max(leftHeight, rightHeight) + 1;
}


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Height of the tree:", treeHeight(root));
