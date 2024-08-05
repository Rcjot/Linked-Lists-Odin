function LinkedList() {
    const headNode = Node();

    const append = function(value) {
        const newNode = Node(value);
        let currentNode = headNode;

        while (currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    const prepend = function(value) {
        const newNode = Node(value);
        const tempNode = headNode.nextNode;
        headNode.nextNode = newNode;
        newNode.nextNode = tempNode;
    }
    
    const size = function() {
        let currentNode = headNode.nextNode;
        let size = 0;
        while (currentNode != null){
            currentNode = currentNode.nextNode
            size++;
        }
        return size;
    }

    const head = function() {
        return headNode.nextNode.value;
    }

    const tail = function() {
        let currentNode = headNode;
        while (currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    const atIndex = function(index) {
        let currentNode = headNode;
        for (let i = 0; i <= index; i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode.value;
    }

    const pop = function() {
        let currentNode = headNode;
        while (currentNode.nextNode.nextNode != null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    }

    const contains = function(value) {
        let currentNode = headNode;
        while (currentNode.nextNode != null) {
            if (currentNode.nextNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    const find = function(value) {
        let currentNode = headNode;
        let index = 0;
        while (currentNode.nextNode != null) {
            if (currentNode.nextNode.value === value) return index; 
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }

    const toString = function() {
        let currentNode = headNode;
        let text = '';
        while (currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
            text+= `(${currentNode.value}) -> `
        }
        text += '(null)';
        return text;
    }

    const insertAt = function(value, index) {
        let currentNode = headNode;
        const newNode = Node(value);
        for (let i = 0; i < index; i++){
            if (currentNode.nextNode != null){
                currentNode = currentNode.nextNode;
            }
        }
        let tempNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        newNode.nextNode = tempNode;
    }   

    const removeAt = function(index) {
        let currentNode = headNode;
        for (let i = 0; i<index; i++){
            if (currentNode.nextNode.nextNode != null){
                currentNode = currentNode.nextNode;
            }
        }
        const tempNode = (currentNode.nextNode != null) ? currentNode.nextNode.nextNode : null;
        currentNode.nextNode = tempNode;

    }

    return {
        headNode,
        append,
        prepend,
        size,
        head,
        tail,
        atIndex,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    }

}

function Node(value = null, nextNode = null) {
    value = value;
    nextNode = nextNode;
    return {value, nextNode};
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

console.log('size: '+list.size());
console.log('head: '+list.head());
console.log('tail: '+list.tail());
list.pop();
console.log('!popped!');
console.log(list.toString());
console.log(list.atIndex(2));
console.log('where is snake? ' + list.find('snake'));
console.log('where is dinosaur? ' + list.find('dinosaur'));
console.log('contains snake? ' + list.contains('snake'));
console.log('contains turtle? ' + list.contains('turtle'));
list.append("dodo");
list.prepend("pig");
console.log(list.toString());
console.log('head: '+list.head());
console.log('tail: '+list.tail());
list.insertAt("bird", 3);
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
