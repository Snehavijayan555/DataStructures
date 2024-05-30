class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

   
    getSize() {
        return this.size;
    }

 
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.front.value;
        this.front = this.front.next;
        this.size--;
        if (this.isEmpty()) {
            this.rear = null;
        }
        return value;
    }

    
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

   
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let current = this.front;
            let result = '';
            while (current) {
                result += current.value + ' ';
                current = current.next;
            }
            console.log(result.trim());
        }
    }

   
    reverse() {
        if (!this.isEmpty()) {
            const frontElement = this.dequeue();
            this.reverse();
            this.enqueue(frontElement);
        }
    }
}


const queue = new LinkedListQueue();
console.log(queue.isEmpty()); 
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.getSize()); 
queue.print(); 

console.log(queue.dequeue()); 
console.log(queue.peek()); 
queue.print(); 

queue.enqueue(60);
queue.print(); 

queue.reverse();
queue.print(); 
