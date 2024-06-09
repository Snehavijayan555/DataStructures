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

    getNodeWithMostEdges() {
        let maxEdges = -1;
        let nodeWithMostEdges = null;

        for (let [vertex, edges] of this.adjacencyList) {
            if (edges.length > maxEdges) {
                maxEdges = edges.length;
                nodeWithMostEdges = vertex;
            }
        }

        return nodeWithMostEdges;
    }
}


const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 1);

const nodeWithMostEdges = graph.getNodeWithMostEdges();
console.log("Node with most edges:", nodeWithMostEdges); 
