class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        let currentNodeIndex = this.values.length -1;
        let currentNode = this.values[currentNodeIndex];
        let currentPriority = this.values[currentNodeIndex].priority;
        while(true) {
            let parentIndex = Math.floor((currentNodeIndex - 1)/2);
            let parent = this.values[parentIndex];
            if(currentPriority <= parent.priority) break;
            this.values[currentPriority] = parent;
            this.values[parentIndex] = currentNode;
            currentNodeIndex = parentIndex;
        }
    }
    heapify() {
        let parentIndex = 0;
        let length = this.values.length;
        let element = this.values[0];

        while(true) {
            let swap = null;
            let leftChild, rightChild;
            let leftChildIndex = (2 * parentIndex ) + 1;
            let rightChildIndex = (2 * parentIndex ) + 2;
            if(leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > element.priority) swap = leftChildIndex;
            }
            if(rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            if(swap === null) break;
            this.values[parentIndex] = this.values[swap];
            this.values[swap] = element;
            parentIndex = swap;
        }
    }
    dequeue(){
        if(!this.values) return null;
        let highestPriorityNode = this.values[0];
        let lastNode = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = lastNode;
            this.heapify();
        }

    }

}