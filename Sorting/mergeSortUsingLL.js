class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }

   
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    
    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }

    // Merge Sort
    mergeSort(head = this.head) {
        if (!head || !head.next) {
            return head;
        }

        const middle = this.getMiddle(head);
        const nextOfMiddle = middle.next;

        middle.next = null;

        const left = this.mergeSort(head);
        const right = this.mergeSort(nextOfMiddle);

        return this.sortedMerge(left, right);
    }

    // Merge two sorted linked lists
    sortedMerge(left, right) {
        if (!left) {
            return right;
        }
        if (!right) {
            return left;
        }

        let result;
        if (left.value <= right.value) {
            result = left;
            result.next = this.sortedMerge(left.next, right);
        } else {
            result = right;
            result.next = this.sortedMerge(left, right.next);
        }
        return result;
    }

   
    getMiddle(head) {
        if (!head) {
            return head;
        }

        let slow = head, fast = head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    
    sort() {
        this.head = this.mergeSort(this.head);
    }
}


const list = new LinkedList();
list.append(3);
list.append(1);
list.append(4);
list.append(2);
list.append(5);

console.log("Original list:");
list.display();

list.sort();

console.log("Sorted list:");
list.display();
