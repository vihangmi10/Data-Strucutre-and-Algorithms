class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor() {
        this.root = null;
    }
    // instance methods
    insert(val) {
        const newNode = new Node(val);
        if(!this.root) return this.root = newNode;
        let iterativeNodePointer = this.root;
        while(true) {
            if(iterativeNodePointer.value === val) return 'Already exists';
            if(val > iterativeNodePointer.value) {
                if(!iterativeNodePointer.right) {
                    iterativeNodePointer.right = newNode;
                    return this;
                } else {
                    iterativeNodePointer = iterativeNodePointer.right;
                }
            }
            if(val < iterativeNodePointer.value) {
                if(!iterativeNodePointer.left) {
                    iterativeNodePointer.left = newNode;
                    return this;
                } else {
                    iterativeNodePointer = iterativeNodePointer.left;
                }
            }
        }

        return this;
    }
   search(val) {
        if(!this.root) return false;
        let iteratorNodePointer = this.root;
        let found = false;
        while(iteratorNodePointer && !found) {
            if(val < iteratorNodePointer.value) {
                iteratorNodePointer = iteratorNodePointer.left;
            } else if(val > iteratorNodePointer.value) {
                iteratorNodePointer = iteratorNodePointer.right;
            } else {
                found = true;
            }
        }
        return iteratorNodePointer;
   }
   bfsIterative() {
        let queueArr = [];
        let visited = [];
        if(!this.root) return null;
        queueArr.push(this.root);
        while(queueArr.length) {
            let node = queueArr.shift();
            visited.push(node.value);
            if(node.left) {
                queueArr.push(node.left)
            }
            if(node.right) {
                queueArr.push(node.right);
            }
        }
        return visited;
   }
   dfsPreOrder() {
        if(!this.root) return [];
        let visited = [];
        let currentNode = this.root;

        function travese(node) {
            visited.push(node.value);
            if(node.left) {
                travese(node.left);
            }
            if(node.right) {
                travese(node.right);
            }
        }
        travese(currentNode);
        return visited;
   }
   dfsPostOrder() {
        if(!this.root) return [];
        let visited = [];
        let currentNode = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value);
        }
        traverse(currentNode);
        return visited;
   }
   dfsInOrder() {
        if(!this.root) return [];
        let visited = [];
        function traverse(node) {
            if(node.left) traverse(node.left);
            visited.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
   }
}

const bst = new binarySearchTree();

bst.insert(5);
bst.insert(4);
bst.insert(7);
bst.insert(9);
bst.insert(6);
bst.insert(3);

console.log(bst.bfsIterative());

console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());

//console.log(bst.insert(3));

//console.log(bst.search(6));
//console.log(JSON.stringify(bst));