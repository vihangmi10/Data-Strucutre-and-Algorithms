class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    // INSTANCE METHODS --> METHODS ACCESSIBLE TO ALL THE INSTANCES CREATED USING NEW KEYWORD AND CLASS SINGLYLINKEDLIST
    push(val) {
    let node = new Node(val);
    if(!this.head) {
        this.head = node;
        this.tail = this.head;
    } else {
        this.tail.next = node;
        this.tail = node;
    }
    this.length++;
    return this;
    }
    // Pop removes the last item in the list and returns the item.
    pop() {
        if(!this.head) return null;
        let tmp = this.head;
        while(tmp.next.next) {
            tmp = tmp.next;
        }
        let value = tmp.next.value;
        this.tail = tmp;
        this.tail.next = null;
        this.length --;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return value;
    }
    // Another Pop implementation
    pop2() {
        if(!this.head) return null;
        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentNode.value;

    }
    // removing the node from the beginning of the list
    shift() {
        if(!this.head) return null;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length --;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead.value;
    }
    // add node to the beginning of the list
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head =  newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
    // get node's value at that position
    get(position) {
        if(position >= this.length || position < 0) return 'Out of bound';
        let tmpNode = this.head;
        if(position === 0) return this.head.value;
        if(position === this.length - 1) return this.tail.value;
        let counter = 0;
        while(counter !== position) {
            tmpNode = tmpNode.next;
            counter++;
        }
        return tmpNode;
    }
    // Changing the value of a node at the specified position
    set(position, newValue) {
        if(position < 0 || position >= this.length ) return false;
        let tmpNode = this.head;
        let counter = 0;
        while(position !==  counter) {
         tmpNode = tmpNode.next;
         counter++;
        }
        tmpNode.value = newValue;
        return true;
    }
    set2(position, value) {
        if(position < 0 || position >= this.length) return false;
        let foundNode = this.get(position);
        if(foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    // Adding a node at a specified position
    insert(position, newValue) {
        if(position < 0 || position >= this.length) return false;
        let newNode = new Node(newValue);
        if(position === 0) return !!this.unshift(newValue); // Convert whatever is returned to boolean if the list is returned then it will be true and will return true
        if(position === this.length -1) return !!this.push(newValue); // if the push function worked at returned a list then it will convert it to boolean value true and return true
        let beforeNode = this.get(position - 1);
        newNode.next = beforeNode.next;
        beforeNode.next = newNode;
        this.length ++;
        return true;
    }
    // Removing a node from a specific position
    remove(position) {
        if(position < 0 || position >= this.length) return false;
        if(position === 0) return this.shift();
        if(position === this.length - 1) return this.pop2();
        let beforeNode = this.get(position -1);
        let returnValue = beforeNode.next.value;
        beforeNode.next = this.get(position).next;
        this.length --;
        return returnValue;
    }

    // In place reverse the linked list
    reverse() {
        // Swap the head and tail using a intermediate or temporary node
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let nextNode;
        let prevNode = null;
        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
    print() {
        if(!this.head) return null;
        let tmp = this.head;
        while(tmp) {
            console.log(`${tmp.value} `);
            tmp = tmp.next;
        }
    }

}
let list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.print();

list.insert(4,13);
list.insert(5,14);
console.log('Original List  --- ');
list.print();

const newList = list.reverse();
console.log('Reversed list ----');
list.print()
