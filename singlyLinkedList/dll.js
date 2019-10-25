class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }

}

class dll {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // Instance Methods
    // Add the element at the end
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            newNode.prev = currentNode;
            currentNode.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // remove the element from the end
    pop() {
        if(!this.head) return null;
        if(this.length === 1) {
            let retVal = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return retVal;
        }
        let currentNode = this.tail.prev;
        currentNode.next = null;
        this.tail.prev = null;
        let returnVal = this.tail.value;
        this.tail = currentNode;
        this.length--;
        return returnVal;
    }
    // remove the element from the beginning of the list
    shift() {
        if(!this.head) return null;
        if(this.length === 1) {
            let retVal = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return retVal;
        }
        let currentNode = this.head.next;
        let retVal = this.head.value;
        currentNode.prev = null;
        this.head = currentNode;
        this.length --;
        return retVal;
    }
    // add element at the first place
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // get the element at a particular element
    get(position) {
        if(position < 0 || position >= this.length) return false;
        let currentNode = this.head;
        let counter = 0;
        while(position !== counter) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    // insert a new node at a give position
    insert(position, val) {
        if(!this.head) return false;
        if(position < 0 || position >= this.length) return 'Out of bound';
        if(position === 0) return this.unshift(val);
        if(position === this.length -1) return this.push(val);
        let newNode = new Node(val);
        let prevNode = this.get(position -1);
        let nextNode = this.get(position);
        prevNode.next = newNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
    }
    // update the value at a particular position
    set(position, val) {
        if(!this.head) return false;
        if(position < 0 || position>= this.length) return false;
        if(position === 0) {
            this.head.value = val;
            return true;
        }
        if(position === this.length -1) {
            this.tail.value = val;
            return true;
        }
        let currentNode = this.head;
        let counter = 0;
        while(counter !== position) {
            currentNode = currentNode.next;
            counter++;
        }
        currentNode.value = val;
        return true;
    }
    // remove a node at a particular position
    remove(position) {
        if(!this.head) return false;
        if(position < 0 || position >= this.length) return false;
        if(position === 0) return this.shift();
        if(position === this.length -1) return this.pop();
        let removalNode = this.get(position);
        let prevNode = this.get(position -1);
        let nextNode = this.get(position +1);

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.length--;
        return removalNode.value;
    }

    print() {
        if(!this.head) return null;
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

let list = new dll();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.unshift(4);
list.insert(3,11);
list.insert(2, 13);
console.log('Node removed -----', list.remove(2));
list.print();
//console.log('Get the value at --- ', list.get(3));
console.log('Tail --- ', list.tail.value);
console.log('head ---- ', list.head.value);
console.log('Length ---- ', list.length);