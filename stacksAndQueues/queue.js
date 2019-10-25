// Implement queue using linked list
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }
    // adding elements in the front
    enqueue(val) {
        let newQueueNode = new Node(val);
        if(!this.front) {
            this.front = newQueueNode;
            this.back = newQueueNode;
        } else {
            newQueueNode.next = this.front;
            this.front = newQueueNode;
        }
        this.size++;
        return this.size;
    }
    // removing the elements from the back
    dequeue() {
        if(!this.front) return null;
        if(this.size === 1) {
            let retVal = this.front.value;
            this.front = null;
            this.back = null;
            this.size--;
            return retVal;
        } else {
            let iteratorNode = this.front;
            while(iteratorNode.next !== this.back) {
                iteratorNode = iteratorNode.next;
            }
            let retVal = this.back.value;
            iteratorNode.next = null;
            this.back = iteratorNode;
            this.size--;
            return retVal;
        }
    }
    print() {
        if(!this.front) return null;
        let iteratorNode = this.front;
        while(iteratorNode) {
            console.log(iteratorNode.value);
            iteratorNode = iteratorNode.next;
        }
    }
}

let queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);

queue.print();