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
            return 'empty';
        }
        return this.stack.pop();
    }

    peek() {
        if (this.empty()) {
            console.log('empty');
            return;
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


let mystack = new Stack();
mystack.push(1);
mystack.push(3);
mystack.push(4);
mystack.push(5);
mystack.push(6);
mystack.push(7);

console.log(mystack.peek()); 
console.log(mystack.peek()); 

mystack.display(); 
mystack.reverse();
mystack.display(); 