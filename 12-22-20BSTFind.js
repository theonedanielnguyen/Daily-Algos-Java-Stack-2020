// https://www.cs.usfca.edu/~galles/visualization/BST.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current);// true / false
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }

        // first iteration possibly move the root
        if (current.left === null) {
            this.root = current.right;
            current.right = null;
            return current;
        }

        // look ahead
        if (current.left && (current.left.left === null)) {
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        return this.removeSmallest(current.left);
    }

    insert(node, current){
        if (current === undefined) {
            current = this.root;
        };

        // empty tree
        if (current === null) {
            this.root = node;
            return;
        };

        // go left
        if (current.val > node.val) {
            // check if null and add
            if (current.left === null) {
                current.left = node;
                return;
            } else {
                // else recurse left
                return this.insert(node, current.left);
            }
        // else go right
        } else if (current.val < node.val) {
            // check if null and add
            if (current.right === null) {
                current.right = node;
                return;
            } else {
                // else recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // if no tree, tree is root
        if (current === undefined) {
            current = this.root;
        }

        // if tree becomes null, return null
        if (current === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (current.right === null) {
            return current.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(current.right);
    }

    // iterative
    getSmallestFromSubtree() {
        // create runner
        var runner = this.root;

        // return if root is null
        if(!runner) return;

        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};

// function that calls itself
// modifies the inputs
// so that the inputs eventual fail and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));