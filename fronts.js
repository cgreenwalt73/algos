class Node { //class for creating a node for a sll
    constructor(data) {
        this.data = data; //node info
        this.next = null; //what comes next in the list
    }
}
class SLL { // class for the sll
    constructor() {
        this.head = null; //it starts empty
    }
    //method for adding node to the front of the list
    addFront(value) {
        let newNode = new Node(value); //creates a node given the value
        if (!this.head) { //if there's no head, it becomes the head node
            this.head = newNode;
            return this;
        }
        newNode.next = this.head; //if there already is a head, we'll make it the next node for the new variable
        this.head = newNode; //then make the new node the head node
        return this;
    }
    //method for removing the head node
    removeFront() {
        if (!this.head) { //if the list is empty,
            return null; //return null
        }
        let oldHead = this.head; //variable to hold the node being removed
        let newHead = oldHead.next; //variable to hold the second node that will become the head node
        this.head = newHead; //make the second node the head node
        oldHead.next = null; //the node being removed shouldn't be able to point to any other node
        return this.head;
    }
    //method to obtain data from head node
    front() {
        if (!this.head) { //if the list is empty,
            return null; //return null
        }
        return this.head.data //return data from head node
    }
}
SLL1 = new SLL()
console.log(SLL1.addFront(18))
console.log(SLL1.addFront(5))
console.log(SLL1.addFront(73))