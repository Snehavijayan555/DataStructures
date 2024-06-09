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

    // Helper function to get all vertex values
    getAllVertices() {
        return Array.from(this.adjacencyList.keys());
    }

    // Function to find the second largest value among vertices
    findSecondLargest() {
        let vertices = this.getAllVertices();
        
        if (vertices.length < 2) {
            return null; // If there are less than 2 vertices, we cannot find the second largest
        }

        let first = -Infinity;
        let second = -Infinity;

        for (let value of vertices) {
            if (value > first) {
                second = first;
                first = value;
            } else if (value > second && value < first) {
                second = value;
            }
        }

        return second === -Infinity ? null : second; // If second is still -Infinity, there's no second largest value
    }
}


const graph = new Graph();
graph.addVertex(10);
graph.addVertex(20);
graph.addVertex(30);
graph.addVertex(40);
graph.addVertex(50);

graph.addEdge(10, 20);
graph.addEdge(20, 30);
graph.addEdge(30, 40);
graph.addEdge(40, 50);

console.log(graph.findSecondLargest());