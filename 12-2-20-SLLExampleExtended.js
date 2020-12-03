class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);

            if (current.next === null) {
                console.log("this is the last node");
            }

            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var current = this.head;

        while (current) {
            if (current.next === null) {
                return false;
            } else {
                if (current.data === value) {
                    return true;
                }
            }
            current = current.next;
        }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null;
        var node = this.head
        this.head = node.next;
        node.next = null;
        return node;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var myNewSLL = new SLL();
myNewSLL.addToFront(5);
myNewSLL.addToFront(22);
myNewSLL.addToFront(17);

var current = myNewSLL.head;
while (current) {
    console.log(current.data);
    current = current.next;
    if (current.next === null) {
        console.log("this is the last node");
    }
}