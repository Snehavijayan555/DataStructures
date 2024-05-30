class Queue {
    constructor() {
        this.queue = [];
    }

  
    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

  
    isEmpty() {
        return this.queue.length === 0;
    }

  
    size() {
        return this.queue.length;
    }

    
    display() {
        console.log(this.queue);
    }

    // Reverse the queue using recursion
    reverse() {
        if (this.isEmpty()) {
            return;
        }
        const front = this.dequeue(); // Dequeue the front element
        this.reverse(); // Recursively reverse the rest of the queue
        this.enqueue(front); // Enqueue the front element to the end
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Original queue:");
queue.display();

queue.reverse();

console.log("Reversed queue:");
queue.display();
