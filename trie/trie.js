class TrieNode {
    constructor() {
        this.isWord = false;
        this.frequency = 0;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        if(word.length === 0) return null;
        let currentNode = this.root;
        for(let char of word) {
           if(!currentNode.children.hasOwnProperty(char)) {
               currentNode.children[char] = new TrieNode();
           }
           currentNode = currentNode.children[char];
        }
        currentNode.isWord = true;
        currentNode.frequency = currentNode.frequency + 1;
    }
    getNodeForPrefix(str) {
        let currentNode = this.root;
        for(let char of str) {
            if(!currentNode.children.hasOwnProperty(char)) return false;
            currentNode = currentNode.children[char];
        }
        return currentNode;
    }
    isWord(word) {
        if (!this.getNodeForPrefix(word)) return false;
        return this.getNodeForPrefix(word).isWord;
    }
    getFrequency(word) {
        if(!this.getNodeForPrefix(word)) return 0;
        return this.getNodeForPrefix(word).frequency;
    }
}

const customTrie = new Trie();
customTrie.insert('hello');
console.log(customTrie.isWord('hello'));
console.log(customTrie.getFrequency('hello'));