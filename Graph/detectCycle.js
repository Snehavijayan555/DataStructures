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
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    hasCycle() {
        const visited = new Set();
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex) && this.hasCycleDFS(vertex, null, visited)) {
                return true;
            }
        }
        return false;
    }

    hasCycleDFS(vertex, parent, visited) {
        visited.add(vertex);
        for (const neighbor of this.adjacencyList.get(vertex)) {
            if (!visited.has(neighbor)) {
                if (this.hasCycleDFS(neighbor, vertex, visited)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }
        return false;
    }
}

// Example Usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

console.log("Does the graph have a cycle?", graph.hasCycle()); // Output: false

// Adding an edge to create a cycle
graph.addEdge(4, 1);

console.log("Does the graph have a cycle?", graph.hasCycle()); // Output: true
