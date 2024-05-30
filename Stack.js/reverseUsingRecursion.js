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

    // Reverse the stack using recursion
    reverse() {
        if (this.isEmpty()) {
            return;
        }
        const top = this.pop(); // Pop the top element
        this.reverse(); // Recursively reverse the rest of the stack
        this.enqueueAtBottom(top); // Enqueue the top element at the bottom
    }

   
    enqueueAtBottom(element) {
        if (this.isEmpty()) {
            this.push(element);
        } else {
            const top = this.pop(); // Pop the top element
            this.enqueueAtBottom(element); // Recursively enqueue at bottom
            this.push(top); // Push the top element back onto the stack
        }
    }
}
sage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original stack:");
stack.display();

stack.reverse();

console.log("Reversed stack:");
stack.display();
