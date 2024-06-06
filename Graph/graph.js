class Graph{
    constructor(){
        this.adjacencyList = {}
    }


    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }


    addEdge(vertex1 , vertex2){
      if(!this.adjacencyList[vertex1]){
        this.addvertex(vertex1)
      }  
      if(!this.adjacencyList[vertex2]){
        this.addvertex(vertex2)
      }  
      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
    }



    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )

    }



    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }



    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacenctVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacenctVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
        }
    }
}


const graph = new Graph()

graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")


graph.addEdge("A","B")
graph.addEdge("B","C")


graph.display()

console.log(graph.hasEdge("A","B"))
console.log(graph.hasEdge("A","C"))


graph.removeEdge("A","B")
graph.display()


graph.removeVertex("B")
graph.display()
