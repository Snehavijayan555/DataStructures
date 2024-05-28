class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    
    prepend(value){
const node=new Node(value)
if(this.isEmpty()){
    this.head=node
}else{
node.next=this.head
this.head=node
    }
    this.size++
}

append(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
    let prev=this.head
    while(prev.next){
        prev=prev.next
    }
    prev.next=node
}
this.size++
}

insert(value,index){
    if(index<=0 || index>this.size){
        return
    }
    if(index===0){
        this.prepend(value)
    }else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
}

removeFrom(index){
if(index<0 || index>this.size){
    return null
} 
let removedNode
if(index===0){
    removedNode=this.head
    this.head=this.head.next
}
else{
    let prev=this.head
    for(let i=0;i<index-1;i++){
prev=prev.next
    }
    removedNode=prev.next
    prev.next=removedNode.next
}
this.size++
return(removedNode.value)
}


removeByValue(value) {
    if (!this.head) {
        return null; 
    }
    let removedNode = null;
    while (this.head && this.head.value === value) {
        removedNode = this.head;
        this.head = this.head.next;
        this.size--;
    }
    let prev = this.head;
    let curr = this.head ? this.head.next : null;

    while (curr) {
        if (curr.value === value) {
            removedNode = curr;
            prev.next = curr.next;
            this.size--;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }

}




search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
    return -1
}

reverse(){
   let prev=null
  let  curr=this.head
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
     this.head= prev
}


print(){
    if(this.isEmpty()){
        console.log("list is empty")
    }else{
    let curr=this.head
   let listValues=''
    while(curr){
        listValues += `${curr.value}`
        curr=curr.next
    }
    console.log(listValues)
}
}
}
const list=new linkedlist
list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()

list.append(60)
list.append(70)
list.append(80)
list.print()

list.insert(90,8)
list.print()

list.removeFrom(8)
list.print()


list.removeByValue(60);
list.print();


list.reverse()
list.print()









// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     prepend(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.size++;
//     }


//     insert(val, index) {
//         if (index < 0 || index > this.size) {
//             console.log("Invalid index");
//             return;
//         }

//         if (index === 0) {
//             this.prepend(val);
//             return;
//         }

//         if (index === this.size) {
//             this.append(val);
//             return;
//         }

//         const newNode = new Node(val);
//         let curr = this.head;
//         for (let i = 0; i < index - 1; i++) {
//             curr = curr.next;
//         }
//         newNode.next = curr.next;
//         newNode.prev = curr;
//         curr.next.prev = newNode;
//         curr.next = newNode;
//         this.size++;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.size) {
//             console.log("Invalid index");
//             return;
//         }
//         let curr = this.head;
//         if (index === 0) {
//             this.head = this.head.next;
//         } else {
//             for (let i = 0; i < index; i++) {
//                 curr = curr.next;
//             }
//             curr.prev.next = curr.next;
//         }
//         if (index === this.size - 1) {
//             this.tail = curr.prev;
//         } else {
//             curr.next.prev = curr.prev;
//         }
//         this.size--;
//     }
    



//     removeFromFront() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const value = this.head.value;
//         if (this.size === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.head = this.head.next;
//             this.head.prev = null;
//         }
//         this.size--;
//         return value;
//     }

//     removeFromEnd() {
//         if (this.isEmpty()) {
//             return null;
//         }
//         const value = this.tail.value;
//         if (this.size === 1) {
//             this.head = null;
//             this.tail = null;
//         } else {
//             this.tail = this.tail.prev;
//             this.tail.next = null;
//         }
//         this.size--;
//         return value;
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is empty');
//         } else {
//             let current = this.head;
//             let result = '';
//             while (current) {
//                 result += `${current.value} `;
//                 current = current.next;
//             }
//             console.log('Doubly Linked List:', result.trim());
//         }
//     }

//     reverse() {
//         let current = this.head;
//         let prevNode = null;
//         while (current) {
//             const nextNode = current.next;
//             current.next = prevNode;
//             current.prev = nextNode;
//             prevNode = current;
//             current = nextNode;
//         }
//         this.tail = this.head;
//         this.head = prevNode;
//     }
// }

// // Example usage:
// const dll = new DoublyLinkedList();
// dll.append(1);
// dll.append(2);
// dll.append(3);
// dll.prepend(0);

// console.log('Original Doubly Linked List:');
// dll.print();

// dll.removeFromFront();
// dll.removeFromEnd();

// console.log('Doubly Linked List after removals:');
// dll.print();

// dll.reverse();
// console.log('Reversed Doubly Linked List:');
// dll.print();


