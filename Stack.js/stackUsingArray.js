class Stack {
    constructor() {
        this.stack = [];
    }

    push(e) {
        this.stack.push(e);
    }

    empty() {
        return this.size() === 0;
    }

    pop() {
        if (this.empty()) {
            return "empty";
        }
        return this.stack.pop();
    }

    peek() {
        if (this.empty()) {
            return "empty";
        }
        return this.stack[this.size() - 1];
    }

    size() {
        return this.stack.length;
    }

    display() {
        console.log(this.stack);
    }

    reverse() {
        if (!this.empty()) {
            const topElement = this.pop();
            this.reverse();
            this.insertAtBottom(topElement);
        }
    }

    insertAtBottom(element) {
        if (this.empty()) {
            this.push(element);
        } else {
            const topElement = this.pop();
            this.insertAtBottom(element);
            this.push(topElement);
        }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.display(); 
console.log(myStack.peek()); 

myStack.pop();
myStack.display();

myStack.reverse();
myStack.display(); 
