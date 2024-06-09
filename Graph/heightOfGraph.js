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

    graphHeight() {
        let maxHeight = 0;

        for (const vertex of this.adjacencyList.keys()) {
            const visited = new Set();
            const height = this.dfsHeight(vertex, visited);
            maxHeight = Math.max(maxHeight, height);
        }

        return maxHeight;
    }

    dfsHeight(vertex, visited) {
        if (visited.has(vertex)) {
            return 0;
        }

        visited.add(vertex);

        let maxHeight = 0;

        for (const neighbor of this.adjacencyList.get(vertex)) {
            maxHeight = Math.max(maxHeight, this.dfsHeight(neighbor, visited));
        }

        return maxHeight + 1;
    }
}


const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);

console.log("Height of the graph:", graph.graphHeight()); 
