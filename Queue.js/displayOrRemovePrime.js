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

    // Function to remove prime numbers from the queue using recursion
    removePrimes() {
        if (this.isEmpty()) {
            return;
        }
        const front = this.dequeue(); // Dequeue the front element
        if (!this.isPrime(front)) {
            console.log("Prime number:", front); // Display prime numbers
            this.removePrimes(); // Recursively remove primes from the rest of the queue
            this.enqueue(front); // Enqueue non-prime elements back into the queue
        } else {
            this.removePrimes(); // Recursively remove primes from the rest of the queue
        }
    }

    // Function to check if a number is prime
    isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
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

console.log("Prime numbers:");
queue.removePrimes();

console.log("Queue after removing prime numbers:");
queue.display();
