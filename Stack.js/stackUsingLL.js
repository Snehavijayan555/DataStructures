class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return 'empty';
        }
        const value = this.top.value;
        this.top = this.top.next;
        this.size--;
        return value;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('empty');
            return;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    display() {
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements);
    }

    reverse() {
        if (!this.isEmpty()) {
            const topElement = this.pop();
            this.reverse();
            this.insertAtBottom(topElement);
        }
    }

   
    insertAtBottom(value) {
        if (this.isEmpty()) {
            this.push(value);
        } else {
            const topElement = this.pop();
            this.insertAtBottom(value);
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
mystack.display();


console.log(mystack.peek()); 
mystack.pop();
console.log(mystack.peek()); 
mystack.display(); 

mystack.reverse();
mystack.display();
