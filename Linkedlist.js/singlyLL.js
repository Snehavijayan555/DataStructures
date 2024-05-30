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

console.log(list.search(50))

list.reverse()
list.print()
