class Stack {
    constructor() {
        this.stack = [];
    }

  
    push(element) {
        this.stack.push(element);
    }

 
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    
    isEmpty() {
        return this.stack.length === 0;
    }

    
    size() {
        return this.stack.length;
    }

    
    display() {
        console.log(this.stack);
    }

    // Function to remove prime numbers from the stack using recursion
    removePrimes() {
        if (this.isEmpty()) {
            return;
        }
        const top = this.pop(); // Pop the top element
        if (!this.isPrime(top)) {
            this.removePrimes(); // Recursively remove primes from the rest of the stack
            this.push(top); // Push non-prime elements back onto the stack
        } else {
            console.log("Prime number:", top); // Display prime numbers
            this.removePrimes(); // Recursively remove primes from the rest of the stack
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

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log("Original stack:");
stack.display();

console.log("Prime numbers:");
stack.removePrimes();

console.log("Stack after removing prime numbers:");
stack.display();
