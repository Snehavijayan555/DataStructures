
// // remove specific node
// class listNode{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// const deleteNode=function(node){
//     node.value=node.next.value
//     node.next=node.next.next
// }
// const print= function(head){
//     let curr=head
//     let values=[]
//     while(curr){
//         values.push(curr.value)
//         curr=curr.next
//     }
//     console.log(values.join("->"))
// }

// let head=new listNode(1)
// head.next=new listNode(2)
// head.next.next=new listNode(3)

// print(head)
// deleteNode(head.next)
// print(head)







// // linkedlist with tail-removefrom back and front
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }

//     prepend(value){
//         const node=new Node(value)
//         if(this.isempty()){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//         append(value){
// const node=new Node(value)
// if(this.isempty()){
//     this.head=node
//     this.tail=node
// }else{
//     this.tail.next=node
//     this.tail=node
// }
// this.size++
//         }


//         removeFromFront(){
// if(this.isempty()){
//     return null
// }
// const value=this.head.value
// this.head=this.head.next
// this.size--
// return value
//         }

//         removeFromBack(){
// if(this.isempty()){
//     return null
// }
// const value=this.tail.value
// if(this.size===1){
//     this.head=null
//     this.tail=null
// }
// else{
//     let prev=this.head
//     while(prev.next !== this.tail){
//         prev=prev.next
//     }
//     prev.next=null
//     this.tail=prev
// }
// this.size--
// return value
//         }   

//         print(){
//             if(this.isempty()){
//                 console.log('list is empty')
//             }else{
//                 let curr=this.head
//                 let listValues=''
//                 while(curr){
//                  listValues += `${curr.value}`
//                 curr= curr.next
//             }
//             console.log(listValues)
//         }
//     }

// }
//     const list=new LinkedList()
// console.log('list is empty?',list.isempty())
// console.log('list size?',list.getsize())
// list.print()

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()

// list.removeFromFront()
// list.removeFromBack()
// list.print()
// console.log('List Size' , list.getsize())





// // LINKED LIST- Remove duplicates from list
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val; 
//         this.next = next;
//     }
// }
// const deleteDuplicates = function(head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     let current = head;
//     while (current && current.next) {
//         if (current.val === current.next.val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head; 
// };
// const printList = function(head) {
//     let current = head;
//     const values = [];
//     while (current) {
//         values.push(current.val);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// };
// let head = new ListNode(1);
// head.next = new ListNode(1);
// head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(3);
// head.next.next.next.next = new ListNode(3);

// console.log("Original list:");
// printList(head);
// head = deleteDuplicates(head);
// console.log("List after removing duplicates:");
// printList(head);





// // check prime number
// class ListNode {
//     constructor(value = 0, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
// }
// function printPrimeNumbers(head) {
//     let current = head;
//     while (current) {
//         if (isPrime(current.value)) {
//             console.log(current.value);
//         }
//         current = current.next;
//     }
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// head.next.next.next.next.next = new ListNode(6);

// printPrimeNumbers(head);



// // reverse recursion
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// const reverseListRecursive = function(head) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     let newHead = reverseListRecursive(head.next);
//     head.next.next = head;
//     head.next = null;
//     return newHead;
// }
// const printList = function(head) {
//     let current = head;
//     let values = [];
//     while (current !== null) {
//         values.push(current.value);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log("Original list:");
// printList(head); 
// head = reverseListRecursive(head);
// console.log("Reversed list:");
// printList(head);





// // linked-list add node to middle of single linked list 
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const insertNodeInMiddle = function(head, value) {
//     if (!head) {
//         return new ListNode(value);
//     }
//     let fast = head;
//     let slow = head;
//     let prev = null;

//     while (fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     const newNode = new ListNode(value);
//     if (prev) {   
//         prev.next = newNode;
//         newNode.next = slow;
//     } else {
        
//         newNode.next = head;
//         return newNode;
//     }

//     return head;
// };

// const printList=function(head) {
//     let current = head;
//     const values = [];
//     while (current) {
//         values.push(current.val);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);

// console.log("Original List:");
// printList(head);
// head = insertNodeInMiddle(head, 10);
// console.log("List after inserting 10 in the middle:");
// printList(head)






//  // linkedlist-remove from the middle
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const removeNodeFromMiddle = function(head) {
//     if (!head || !head.next) {
//         return null;
//     }

//     let slow = head;
//     let fast = head.next; 
//     let prev = null;

//     while (fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     if (prev) {
//         prev.next = slow.next;
//     } else {
        
//         head = head.next;
//     }

//     return head;
// };

// const printList=function(head) {
//     let current = head;
//     const values = [];
//     while (current) {
//         values.push(current.val);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);


// console.log("Original List:");
// printList(head);

// head = removeNodeFromMiddle(head);

// console.log("List after removing from the middle:");
// printList(head);






// // linked list-reverse string
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const reverseStringLinkedList = function(str) {
//     let head = null;
//     for (let i = str.length - 1; i >= 0; i--) {
//         head = new ListNode(str[i], head);
//     }
//     let reversedString = "";
//     let current = head;
//     while (current !== null) {
//         reversedString = current.val + reversedString;
//         current = current.next;
//     }
//     return reversedString;
// };
// const inputString = "SNEHA VIJAYAN";
// const reversedString = reverseStringLinkedList(inputString);
// console.log("Reversed String:", reversedString);





// // LINKEDLIST-SWAP FIRST AND LAST LETTER
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const swapFirstAndLast = function(str) {
//     let head = null;
//     for (let i = str.length - 1; i >= 0; i--) {
//         head = new ListNode(str[i], head);
//     }
//     let first = head;
//     let last = head;
//     while (last.next !== null) {
//         last = last.next;
//     }
//     let temp = first.val;
//     first.val = last.val;
//     last.val = temp;
//     let swappedString = "";
//     let current = head;
//     while (current !== null) {
//         swappedString += current.val;
//         current = current.next;
//     }
//     return swappedString;
// };
// const inputString = "apple";
// const swappedString = swapFirstAndLast(inputString);
// console.log("Swapped String:", swappedString); 






// // LINKEDLIST- Get middle element of linkedlis
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const findMiddleElement = function(head) {
//     if (!head) {
//         return null; 
//     }
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow; 
// };
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// const middleElement = findMiddleElement(head);
// if (middleElement) {
//     console.log("Middle Element:", middleElement.val);
// } else {
//     console.log("The list is empty.");
// }





// // LINKED LIST-palindrome using linklist
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const isPalindrome = function(head) {
//     if (!head || !head.next) {
//         return true; 
//     }
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     let secondHalf = reverseLinkedList(slow);
//     let firstHalf = head;
//     while (secondHalf) {
//         if (firstHalf.val !== secondHalf.val) {
//             return false; 
//         }
//         firstHalf = firstHalf.next;
//         secondHalf = secondHalf.next;
//     }
//     return true; 
// };
// const reverseLinkedList = function(head) {
//     let prev = null;
//     let current = head;
//     while (current) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// };
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(2);
// head.next.next.next.next = new ListNode(1);
// console.log("Is the linked list a palindrome?", isPalindrome(head));




//  // LINKEDLIST-PALINDROME(STRING)
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const isPalindrome = function(str) {
//     if (!str || str.length === 0) {
//         return true; 
//     }
//     const createLinkedList = function(str) {
//         let head = null;
//         for (let i = str.length - 1; i >= 0; i--) {
//             head = new ListNode(str[i], head);
//         }
//         return head;
//     };
//     const head = createLinkedList(str);
//     let slow = head;
//     let fast = head;
//     let prev = null;
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         let next = slow.next;
//         slow.next = prev;
//         prev = slow;
//         slow = next;
//     }
//     if (fast !== null) {
//         slow = slow.next;
//     }
//     while (prev !== null && slow !== null) {
//         if (prev.val !== slow.val) {
//             return false; 
//         }
//         prev = prev.next;
//         slow = slow.next;
//     }
//     return true; 
// };
// const inputString = "malayalam";
// console.log(`Is "${inputString}" a palindrome?`, isPalindrome(inputString));



// // LINKEDLIST-MERGE TWO LISTS
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const mergeTwoLists = function(l1, l2) {
//     const dummyHead = new ListNode();
//     let current = dummyHead;
//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }
//     if (l1 !== null) {
//         current.next = l1;
//     }
//     if (l2 !== null) {
//         current.next = l2;
//     }

//     return dummyHead.next;
// };

// const printLinkedList = function(head) {
//     const values = [];
//     let current = head;
//     while (current !== null) {
//         values.push(current.val);
//         current = current.next;
//     }
//     console.log(values.join(' -> '));
// };

// const l1 = new ListNode(1);
// l1.next = new ListNode(3);
// l1.next.next = new ListNode(5);

// const l2 = new ListNode(2);
// l2.next = new ListNode(4);
// l2.next.next = new ListNode(6);

// const mergedList = mergeTwoLists(l1, l2);

// console.log("Merged List:");
// printLinkedList(mergedList);



// // add array to linkedlist
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     prepend(value) {
//         const newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.head = newNode;
//         } else {
//             newNode.next = this.head;
//             this.head = newNode;
//         }
//         this.size++;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     addArray(array) {
//         if (!Array.isArray(array)) {
//             console.log("Input must be an array");
//         }
//         for (let i = array.length - 1; i >= 0; i--) {
//             this.prepend(array[i]);
//         }
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("List is empty");
//         } else {
//             let curr = this.head;
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} `;
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList();
// const arrayToAdd = [1, 2, 3, 4, 5];
// list.addArray(arrayToAdd);
// list.print(); 




// // remove odd numbers from list
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// const removeOddValues = function(head) {
//     while (head !== null && head.value % 2 !== 0) {
//         head = head.next;
//     }
//     if (head === null) return null;
//     let current = head;
//     while (current !== null && current.next !== null) {
//         if (current.next.value % 2 !== 0) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head;
// }

// const printList = function(head) {
//     let current = head;
//     let values = [];
//     while (current) {
//         values.push(current.value);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log("Original list:");
// printList(head);

// head = removeOddValues(head);

// console.log("List after removing odd values:");
// printList(head); 




// // add value next to another value
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// const addNodeAfter = function(node, newValue) {
//     if (node === null) {
//         throw new Error("The given node is null.");
//     }
//     const newNode = new ListNode(newValue);
//     newNode.next = node.next;
//     node.next = newNode;
// }
// const print = function(head) {
//     let curr = head;
//     let values = [];
//     while (curr) {
//         values.push(curr.value);
//         curr = curr.next;
//     }
//     console.log(values.join(" -> "));
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(5);
// head.next.next.next.next = new ListNode(6);
// print(head); 
// addNodeAfter(head.next, 4);
// print(head); 



