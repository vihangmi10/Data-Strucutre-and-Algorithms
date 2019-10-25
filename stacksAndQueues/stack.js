// Stack using Linked List Implementation

class Node{
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;

    }
    push(val) {
        let stackNode = new Node(val);
        if(!this.first) {
            this.first = stackNode;
            this.last = this.first;
        } else {
            this.first.next = stackNode;
            this.first = stackNode;
        }
        this.size++;
        return this.size;
    }
    print() {
        if (!this.first) return null;
        let iteratorNode = this.last;
        while(iteratorNode) {
            console.log(iteratorNode.value);
            iteratorNode = iteratorNode.next;
        }
    }
    pop() {
        if(!this.first) return null;
        if(this.size === 1) {
            let retVal = this.first.value;
            this.first = null;
            this.last = null;
            this.size--;
            return retVal;
        } else {
            let iterartorNode = this.last;
            while(iterartorNode.next !== this.first) {
                iterartorNode = iterartorNode.next;
            }
            let retVal = iterartorNode.next.value;
            iterartorNode.next = null;
            this.first = iterartorNode;
            this.size--;
            return retVal;
        }
    }
}
let stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

stack.print();