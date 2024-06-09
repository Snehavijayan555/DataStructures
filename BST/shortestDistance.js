class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function shortestDistance(root, targetValue) {
    if (root === null) return -1; // Target not found

    const queue = [{ node: root, distance: 0 }];

    while (queue.length > 0) {
        const { node, distance } = queue.shift();

        if (node.value === targetValue) {
            return distance;
        }

        for (const child of node.children) {
            queue.push({ node: child, distance: distance + 1 });
        }
    }

    return -1; // Target not found
}


const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node3.addChild(node6);

console.log("Shortest Distance between 1 and 6:", shortestDistance(root, 6)); 
