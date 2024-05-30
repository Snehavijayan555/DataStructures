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

   
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

   
    display() {
        console.log(this.stack);
    }
}

// Function to remove even numbers from a stack
function removeEvenNumbers(stack) {
    const auxiliaryStack = new Stack();
    
    // Transfer all elements to the auxiliary stack, filtering out even numbers
    while (!stack.isEmpty()) {
        const topElement = stack.pop();
        if (topElement % 2 !== 0) {
            auxiliaryStack.push(topElement);
        }
    }
    
    // Transfer the elements back to the original stack
    while (!auxiliaryStack.isEmpty()) {
        stack.push(auxiliaryStack.pop());
    }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

console.log("Original stack:");
stack.display();

removeEvenNumbers(stack);

console.log("Stack after removing even numbers:");
stack.display();
