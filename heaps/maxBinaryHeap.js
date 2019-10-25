class maxBinaryHeap{
   constructor(){
       this.values = [];
   }

   swap(childIndex, parentIndex) {
       let tmp = this.values[childIndex];
       this.values[childIndex] = this.values[parentIndex];
       this.values[parentIndex] = tmp;
   }
   insert(val) {
       // Push it to end of the array
       this.values.push(val);
       let childIndex = this.values.length - 1;
       let element = this.values[childIndex];
       while(true) {
           let parentIndex = Math.floor((childIndex - 1) / 2);
           let parent = this.values[parentIndex];
           if(element <= parent) break;
           swap(childIndex, parentIndex);
           childIndex = parentIndex;

       }


   }
   extractMax() {
       this.swap(0, this.values.length - 1);
       let oldMax = this.values.pop();
       this.maxHeapify();
       return oldMax;
   }
   maxHeapify() {
       let index = 0;
       let element = this.values[0];
       let length = this.values.length;
       while(true) {
           let swap = null;
           let leftChildIndex = 2 * index + 1;
           let rightChildIndex = 2 * index + 2;
           let leftChild, rightChild;
           if(leftChildIndex < length) {
               leftChild = this.values[leftChildIndex];
               if(leftChild > element) {
                   swap = leftChildIndex;
               }
           }
           if(rightChildIndex < length) {
               rightChild = this.values[rightChildIndex];
               if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                   swap = rightChildIndex;
               }
           }
           if(swap === null) break;
           this.swap(index, swap);
           index = swap;
       }
   }
   print() {
       console.log(this.values);
   }
}

const maxHeap = new maxBinaryHeap();
maxHeap.insert(5);
maxHeap.insert(11);
maxHeap.insert(17);
maxHeap.insert(3);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(99);
maxHeap.insert(0);
maxHeap.insert(4);
maxHeap.insert(200);

console.log(`Max value is --- `,maxHeap.extractMax());
maxHeap.print();

