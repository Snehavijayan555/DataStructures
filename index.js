// Fibonacci

// function fibonacci(n){
//     const fib=[0,1]
//     for(var i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2];
//     }
//     return fib
// }
// console.log(fibonacci(7))


// Factorial
// function factorial(n){
//     let res=1
//     for(var i=2;i<=n;i++){
//         res=res*i
//     }
//     return res;
// }
// console.log(factorial(8));


// prime 
// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(var i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5))
// console.log(isPrime(4))


// function isPrime(n){
//     if(n<2){
//         return false
//     }
//     for(var i=2;i<=Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5))
// console.log(isPrime(4))


// power of two
// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n % 2 !== 0){
//             return false;
//         }
//         n=n/2
//     }
//     return true
// }
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))



// function isPowerOfTwo(n){
//         if(n<1){
//             return false
//         }
// return (n & (n-1)) === 0
//     }
//     console.log(isPowerOfTwo(1))
//     console.log(isPowerOfTwo(2))
//     console.log(isPowerOfTwo(5))


// Recursion-Fibonacci
// function recusiveFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return recusiveFibonacci(n-1)+recusiveFibonacci(n-2)
// }
// console.log(recusiveFibonacci(0))
// console.log(recusiveFibonacci(3))
// console.log(recusiveFibonacci(7))



// recursive-Factorial
// function recursiveFactorial(n){
//     if(n===0){
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(3))
// console.log(recursiveFactorial(5))



// RECURSION-PRIME NUMBER
// function isPrime(n, divisor = 2) {
//     if (n <= 1) {
//         return false; 
//     }
//     if (divisor > Math.sqrt(n)) {
//         return true; 
//     }
//     if (n % divisor === 0) {
//         return false; 
//     }
//     return isPrime(n, divisor + 1);
// }
// console.log(isPrime(5)); 
// console.log(isPrime(17)); 
// console.log(isPrime(4)); 
// console.log(isPrime(15));





// RECURSION-POWER OF TWO
// function isPowerOfTwo(n) {
//     if (n === 1) {
//         return true; 
//     }
//     if (n < 1 || n % 2 !== 0) {
//         return false; 
//     }
//     return isPowerOfTwo(n / 2);
// }
// console.log(isPowerOfTwo(1));   
// console.log(isPowerOfTwo(2));  
// console.log(isPowerOfTwo(4));  
// console.log(isPowerOfTwo(8));  




// RECURSION-POWER OF THREE
// function isPowerOfThree(n) {
//     if (n === 1) {
//         return true;
//     }
//     if (n < 1 || n % 3 !== 0) {
//         return false;
//     }
//     return isPowerOfThree(n / 3);
// }

// console.log(isPowerOfThree(1));   
// console.log(isPowerOfThree(3));  
// console.log(isPowerOfThree(9));  




// RECURSION-PALINDROME(STRINGS)
// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }
//     if (str[0] === str[str.length - 1]) {
//         return isPalindrome(str.slice(1, -1));
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome("radar")); 
// console.log(isPalindrome("level")); 
// console.log(isPalindrome("hello")); 


// Linear Search
// function linearSearch(arr,target){
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//         return -1
// }
// console.log(linearSearch([5,4,10,8,7],10))
// console.log(linearSearch([5,4,10,8,7],7))
// console.log(linearSearch([5,4,10,8,7],4))





// RECURSION-LINEAR SEARCH
// function linearSearchRecursive(arr, target, i = 0) {
//     if (i >= arr.length) {
//         return -1;
//     }
//     if (arr[i] === target) {
//         return i;
//     }
//     return linearSearchRecursive(arr, target, i + 1);
// }
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 10)); 
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 7)); 
// console.log(linearSearchRecursive([5, 4, 10, 8, 7], 4)); 






// Binary search
// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if (target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if (arr[middleIndex] < target) {
//             leftIndex = middleIndex + 1;
//         } else {
//             rightIndex = middleIndex - 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch([-5, 4, 6, 8, 9], 4));
// console.log(binarySearch([-5, 4, 6, 8, 9], 9));
// console.log(binarySearch([-5, 4, 6, 8, 9], 8));




// Recursive Binary Search
// function recursiveBinarySearch(arr,t){
//     return search(arr, t, 0, arr.length-1)
// }
// function search(arr , t , low , high){
//     if(low > high){
//         return -1
//     }
//     let middleIndex = Math.floor((low + high) / 2)
//     if(t === arr[middleIndex]){
//         return middleIndex
//     }
//     if(arr[middleIndex]<t){
//         return search(arr , t , middleIndex+1, high)
//     }
//     else{
//         return search (arr , t , low ,middleIndex-1 )
//     }
// }
// console.log(recursiveBinarySearch([-5,4,6,8,9],4))
// console.log(recursiveBinarySearch([-5,4,6,8,9],9))
// console.log(recursiveBinarySearch([-5,4,6,8,9],6))



// linkedlist
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
//     }
//     const list=new LinkedList()
// console.log('list is empty?',list.isempty())
// console.log('list size?',list.getsize())





// linkedlist-prepend(empty list)
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
//         prepend(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }
//             else{
//                 node.next=this.head
//                 this.head=node
//             }
//             this.size++
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

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.print()



// linkedlist-append
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
       
//         append(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }else{
//                 let prev=this.head
//                 while(prev.next){
//                     prev=prev.next
//                 }
//                 prev.next=node
//             }
//             this.size++
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

// list.append(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()



// linkedlist-insert a new node at given index in list
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     } 
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
//         prepend(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }
//             else{
//                 node.next=this.head
//                 this.head=node
//             }
//             this.size++
//         }

       
// insert(value,index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         const node=new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }
// }
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

// list.insert(10,0)
// list.print()

// list.insert(20,0)
// list.print()

// list.insert(30,1)
// list.print()

// list.insert(40,2)
// list.print()
// console.log(list.getsize())



// linkedlist-remove node from given index
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
//         prepend(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }
//             else{
//                 node.next=this.head
//                 this.head=node
//             }
//             this.size++
//         }


// insert(value,index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         const node=new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }
// }

// removeFrom(index){
//     if(index < 0 || index >= this.size){
//         return null
//     }
//     let removedNode
//     if(index === 0){
//         removedNode=this.head
//         this.head=this.head.next
//     }
//     else{
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         removedNode=prev.next
//     prev.next=removedNode.next
//     }
//     this.size--
//     return removedNode.value
// }
  
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

// list.insert(10,0)
// list.print()

// list.insert(20,0)
// list.print()

// list.insert(30,1)
// list.print()

// list.insert(40,2)
// list.print()
// console.log(list.getsize())

// console.log(list.removeFrom(10))

// console.log(list.removeFrom(0))
// list.print()

// console.log(list.removeFrom(1))
// list.print()
// console.log(list.getsize())



// remove specific node
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




// linkedlist-Search from given index
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }
//         prepend(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }
//             else{
//                 node.next=this.head
//                 this.head=node
//             }
//             this.size++
//         }

      
// insert(value,index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         const node=new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }
// }


// search(value){
//     if(this.isempty()){
//         return -1
//     }
//     let i=0
//     let curr=this.head
//     while(curr){
//         if(curr.value === value){
//             return i
//         }
//         curr=curr.next
//         i++
//     }
//     return -1
// }
  
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

// list.insert(10,0)
// list.print()

// list.insert(20,0)
// list.print()

// list.insert(30,1)
// list.print()

// list.insert(40,2)
// list.print()
// console.log(list.getsize())

// console.log(list.search(40))
// console.log(list.search(60))




// linkedlist - Reverse
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//         isempty(){
//             return this.size === 0
//         }
//         getsize(){
//             return this.size
//         }

// // o(1)
//         prepend(value){
//             const node=new Node(value)
//             if(this.isempty()){
//                 this.head=node
//             }
//             else{
//                 node.next=this.head
//                 this.head=node
//             }
//             this.size++
//         }


// insert(value,index){
//     if(index<0 || index>this.size){
//         return
//     }
//     if(index === 0){
//         this.prepend(value)
//     }
//     else{
//         const node=new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }
// }
// reverse(){
//     let prev=null
//     let curr=this.head
// while(curr){
//     let next = curr.next
//     curr.next=prev
//     prev=curr
//     curr=next
// } 
// this.head=prev
// }
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

// list.insert(10,0)


// list.insert(20,0)


// list.insert(30,1)


// list.insert(40,2)
// list.print()


// list.reverse()
// list.print( )




// linkedlist with tail-removefrom back and front
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





// LINKED LIST- Remove duplicates from list
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


// Doubly linkedlist
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


// check prime number
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



// reverse recursion
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


// linked-list add node to middle of single linked list 
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




 // linkedlist-remove from the middle
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






// linked list-reverse string
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





// LINKEDLIST-SWAP FIRST AND LAST LETTER
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






// LINKEDLIST- Get middle element of linkedlis
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





// LINKED LIST-palindrome using linklist
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




 // LINKEDLIST-PALINDROME(STRING)
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



// LINKEDLIST-MERGE TWO LISTS
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



// add array to linkedlist
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




// remove odd numbers from list
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




// add value next to another value
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




// STRING- REVERSE STRING USING RECURSION
// const reverseString = function(str) {
//     if (str.length <= 1) {
//         return str;
//     }

//     const firstChar = str[0];
//     const restOfString = str.slice(1);
//     return reverseString(restOfString) + firstChar;
// };

// const inputString = "Hello sneha";
// const reversedString = reverseString(inputString);
// console.log("Original String:", inputString);
// console.log("Reversed String:", reversedString);

// let string = 'Hello athul'
// function reverse(string){
//     if(string === ''){
//         return ''
//     }
//     return reverse(string.substring(1)) + string.charAt(0)
// }

// console.log(reverse(string));


// function reverseWords(string) {
//     return string.split(' ').map(word => reverse(word)).join(' ');
// }
// function reverse(word) {
//     if (word === '') {
//         return '';
//     }
//     return reverse(word.substring(1)) + word.charAt(0);
// }
// const string = "sneha hello";
// console.log(reverseWords(string));


//BINARY SEARCH - binary search using array of string
// const binarySearch = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
    
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             return mid; 
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1; 
//         }
//     }

//     return -1; 
// };
// const sortedStrings = ["apple", "banana", "cherry", "grape", "orange", "pineapple", "strawberry"];
// const targetString = "orange";

// const index = binarySearch(sortedStrings, targetString);

// if (index !== -1) {
//     console.log(`"${targetString}" found at index ${index}.`);
// } else {
//     console.log(`"${targetString}" not found in the array.`);
// }




// BINARY SEARCH -find the indices of 1st and last index of target element using binary search(string)
// const binarySearchFirstOccurrence = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;
//     let firstOccurrence = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             firstOccurrence = mid;
//             high = mid - 1;
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1;
//         }
//     }

//     return firstOccurrence;
// };

// const binarySearchLastOccurrence = function(sortedArray, target) {
//     let low = 0;
//     let high = sortedArray.length - 1;
//     let lastOccurrence = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);
//         let midValue = sortedArray[mid];

//         if (midValue === target) {
//             lastOccurrence = mid;
//             low = mid + 1;
//         } else if (midValue < target) {
//             low = mid + 1; 
//         } else {
//             high = mid - 1;
//         }
//     }

//     return lastOccurrence;
// };

// const sortedStrings = ["apple", "banana", "cherry", "orange", "orange", "orange", "strawberry"];
// const targetString = "orange";

// const firstIndex = binarySearchFirstOccurrence(sortedStrings, targetString);

// const lastIndex = binarySearchLastOccurrence(sortedStrings, targetString);

// if (firstIndex !== -1 && lastIndex !== -1) {
//     console.log(`First occurrence of "${targetString}" is at index ${firstIndex}.`);
//     console.log(`Last occurrence of "${targetString}" is at index ${lastIndex}.`);
// } else {
//     console.log(`"${targetString}" not found in the array.`);
// }




// BINARY SEARCH -find the indices of 1st and last index of target element using binary search(numbers)
// const binarySearchFirst = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let firstIndex = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             firstIndex = mid;
//             high = mid - 1; 
//         } else if (nums[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return firstIndex;
// };
// const binarySearchLast = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;
//     let lastIndex = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             lastIndex = mid;
//             low = mid + 1; 
//         } else if (nums[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
//     return lastIndex;
// };

// const findFirstAndLastIndex = function(nums, target) {
//     const firstIndex = binarySearchFirst(nums, target);
//     const lastIndex = binarySearchLast(nums, target);
//     return [firstIndex, lastIndex];
// };

// const sortedNumbers = [1, 2, 3, 4, 4, 4, 5, 5, 6, 7, 8, 8, 9];
// const targetNumber = 4;

// const [firstIndex, lastIndex] = findFirstAndLastIndex(sortedNumbers, targetNumber);

// if (firstIndex !== -1 && lastIndex !== -1) {
//     console.log(`First occurrence of ${targetNumber} is at index ${firstIndex}.`);
//     console.log(`Last occurrence of ${targetNumber} is at index ${lastIndex}.`);
// } else {
//     console.log(`Target ${targetNumber} not found in the array.`);
// }





// BINARY SEARCH-apply binary search on [9,7,3,2,-1,-11] (array is sorted in descending order)
// const binarySearchDescending = function(nums, target) {
//     let low = 0;
//     let high = nums.length - 1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (nums[mid] === target) {
//             return mid; 
//         } else if (nums[mid] < target) {
//             high = mid - 1; 
//         } else {
//             low = mid + 1; 
//         }
//     }
//     return -1; 
// };
// const nums = [9, 7, 3, 2, -1, -11];
// const target = 2;

// const index = binarySearchDescending(nums, target);

// if (index !== -1) {
//     console.log(`Target ${target} found at index ${index}.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }





// ARRAY- Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array([3,0,1], n = 3)
// function missingNumber(nums){
//     for(let i=0;i<nums.length;i++){
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// }
// const nums=[3,0,1]
// let res=missingNumber(nums)
// console.log(res);



// ARRAY -Find repeated integers equivalent to number in array
// const findRepeatedEquivalentNumbers = function(nums, number) {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) {
//         const currentNum = nums[i];
//         if (currentNum === number) {
//             let isRepeated = false;
//             for (let j = 0; j < i; j++) {
//                 if (nums[j] === currentNum) {

//                     isRepeated = true;
//                     break; 
//                 }
//             }
//             if (isRepeated) {
//                 result.push(currentNum);
//             }
//         }
//     }

//     return result;
// };

// const nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];
// const numberToMatch = 4;
// const repeatedEquivalentNumbers = findRepeatedEquivalentNumbers(nums, numberToMatch);
// console.log("Repeated numbers equivalent to", numberToMatch + ":", repeatedEquivalentNumbers);





// ARRAY-Find numbers disappeared in array
// const findDisappearedNumbers = function(nums) {
//     const n = nums.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         const index = Math.abs(nums[i]) - 1;
//         if (nums[index] > 0) {
//             nums[index] = -nums[index]; 
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         if (nums[i] > 0) {
//             result.push(i + 1);
//         }
//     }
//     return result;
// };
// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// const disappearedNumbers = findDisappearedNumbers(nums);
// console.log("Numbers disappeared in the array:", disappearedNumbers);



// find frequency of numbers in a array
// function findFrequency(nums) {
//     const frequencyMap = {};

//     for (let num of nums) {
//         if (frequencyMap[num]) {
//             frequencyMap[num]++; 
//         } else {
//             frequencyMap[num] = 1; 
//         }
//     }

//     return frequencyMap;
// }

// const nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// const frequency = findFrequency(nums);
// console.log(frequency);


