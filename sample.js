class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class doublyLL{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head.prev=newNode
            this.head=newNode
        }
        this.size++
    }

    print(){
        let curr=this.head
        let listValues=""
        while(curr){
            listValues += `${curr.value}`
            curr=curr.next
        }
        console.log(listValues)
    }

}

const list=new doublyLL()

list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print()

