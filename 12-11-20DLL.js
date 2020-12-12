//------------------------------- MY WORK -------------------------------//

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node) {
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head=node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return;
        if (this.length == 1) {
            var hold = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return hold;
        }
        else {
            var hold = this.tail;
            this.tail = hold.prev;
            this.tail.next = null;
            hold.prev = null;
            this.length--;
            return hold;
        }
    }


    // return is empty
    isEmpty() {
        if (this.length==0) {
            return true
        }
        else {
            return false
        }
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail=node;
            this.length++;
        }
    }

    // pop from head
    removeHead(){
        if (this.length == 1) {
            var hold = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return hold;
        }
        else {
            var hold = this.head;
            this.head = hold.next;
            this.head.prev = null;
            hold.next = null;
            this.length--;
            return hold;
        }
    }
}

//------------------------------- CLASS EXAMPLE -------------------------------//