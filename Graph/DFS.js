class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
        }
    }

    bfs(startingVertex) {
        const visited = new Set();
        const queue = [startingVertex];
        const result = [];

        visited.add(startingVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            const neighbors = this.adjacencyList.get(currentVertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    dfs(startingVertex) {
        const visited = new Set();
        const result = [];

        const dfsRecursive = (vertex) => {
            if (!vertex) return;

            visited.add(vertex);
            result.push(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    dfsRecursive(neighbor);
                }
            }
        };

        dfsRecursive(startingVertex);

        return result;
    }
}

// Example Usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

console.log("BFS Traversal starting from vertex 1:", graph.bfs(1)); // Output: [1, 2, 3, 4, 5]
console.log("DFS Traversal starting from vertex 1:", graph.dfs(1)); // Output: [1, 2, 4, 3, 5]
