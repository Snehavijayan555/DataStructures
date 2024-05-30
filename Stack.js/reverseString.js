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
}

function reverseString(str) {
    const stack = new Stack();
    // Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }
    
    // Pop all characters from the stack and build the reversed string
    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}


const str = "Hello, World!";
const reversedStr = reverseString(str);
console.log(reversedStr); 