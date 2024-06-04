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

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[0];
    }

    display() {
        console.log(this.queue);
    }
}


function removeEvenNumbers(queue) {
    const newQueue = new Queue();

   
    while (!queue.isEmpty()) {
        const front = queue.dequeue();
        if (front % 2 !== 0) {
            newQueue.enqueue(front);
        }
    }

    
    while (!newQueue.isEmpty()) {
        queue.enqueue(newQueue.dequeue());
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log("Original queue:");
queue.display();

removeEvenNumbers(queue);

console.log("Queue after removing even numbers:");
queue.display();
