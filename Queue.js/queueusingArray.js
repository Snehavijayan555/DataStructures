class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(e) {
        this.queue.push(e);
    }

    empty() {
        return this.size() === 0;
    }

    size() {
        return this.queue.length;
    }

    dequeue() {
        if (this.empty()) {
            return "empty";
        }
        return this.queue.shift();
    }

    front() {
        if (this.empty()) {
            return "empty";
        }
        return this.queue[0];
    }

    
    display() {
        console.log(this.queue);
    }

    
    reverse() {
        if (!this.empty()) {
            const front = this.dequeue();
            this.reverse();
            this.enqueue(front);
        }
        return this.queue;
    }
}


let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);

console.log(myQueue.front());

myQueue.dequeue();
console.log(myQueue.front()); 

myQueue.reverse();
myQueue.display(); 
