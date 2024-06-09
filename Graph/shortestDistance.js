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

    bfsShortestPath(start, target) {
        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(target)) {
            return -1; // If start or target node doesn't exist in the graph
        }

        let visited = new Set();
        let queue = [[start, 0]]; // [node, distance]

        while (queue.length > 0) {
            let [currentNode, distance] = queue.shift();

            if (currentNode === target) {
                return distance;
            }

            if (!visited.has(currentNode)) {
                visited.add(currentNode);

                let neighbors = this.adjacencyList.get(currentNode);
                for (let neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push([neighbor, distance + 1]);
                    }
                }
            }
        }

        return -1; // If there's no path between start and target
    }
}


const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.bfsShortestPath('A', 'E')); 
console.log(graph.bfsShortestPath('A', 'D')); 
console.log(graph.bfsShortestPath('B', 'C')); 
console.log(graph.bfsShortestPath('A', 'F')); 
console.log(graph.bfsShortestPath('F', 'C')); 
