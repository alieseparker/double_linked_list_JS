function BinaryNode(value, level, left, right) {
  this.value = value;
  this.level = level;
  this.left = left;
  this.right = right;
}

function BinaryTree() {
  var head = null;
  var size = 0;
  var tot_depth = 0;
  var balance = 0;

  // // insert(val): will insert the value val into the BST.  If val is already
  // // present, it will be ignored.
  this.insert = function (val) {
    depth = 1;
    if (head == null) {
      head = new BinaryNode (val, depth, null, null);
    } else {
      currentNode = head;
      while(currentNode) {
        depth++;
        if(val < currentNode.value && currentNode.left) {
          currentNode = currentNode.left;
        } else if (val >= currentNode.value && currentNode.right) {
          currentNode = currentNode.right;
        } else {
          break;
        }
      }
      if (val < currentNode.value) {
        currentNode.left = new BinaryNode(val, depth, null, null);
      } else {
        currentNode.right = new BinaryNode(val, depth, null, null);
      }
      if (val >= head.value) {
        balance++;
      } else {
        balance--;
      }
    }
    size++;
    if(depth > tot_depth) {
      tot_depth = depth;
    }
  };

  // contains(val): will return True if val is in the BST, False if not. Pick
  // just one method of traversal for this.
  this.contains = function (val) {
    currentNode = head;
    while(currentNode.value !== val) {
      if(val < currentNode.value && currentNode.left) {
        currentNode = currentNode.left;
      } else if (val >= currentNode.value && currentNode.right) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return (currentNode.value === val);
  };

  // size(): will return the integer size of the BST (equal to the total
  // number of values stored in the tree), 0 if the tree is empty.
  this.size = function () {
    return size;
  };

  // depth(): will return an integer representing the total number of levels in the
  // tree. If there is one value, the depth should be 1, if two values it will be 2,
  // if three values it may be 2 or three, depending, etc.
  this.depth = function () {
    return tot_depth;
  };

  // balance(): will return an integer, positive or negative that represents how
  // well balanced the tree is. Trees which are higher on the left than the right
  // should return a positive value, trees which are higher on the right than the
  // left should return a negative value.  An ideally-balanced tree should return 0.
  this.balance = function () {
    return balance;
  };

  this.in_order = function (node) {
    if (node == null) {
      node = head;
    }
    var right = [];
    var left = [];
    if (node.left == null && node.right == null) {
      return [node.value];
    }
    if (node.left !== null) {
      left = this.in_order(node.left);
    }
    if (node.right !== null) {
      right = this.in_order(node.right);
    }
    left.push(node.value);
    return left.concat(right);
  };

  this.post_order = function (node) {
    if (node == null) {
      node = head;
    }
    var right = [];
    var left = [];
    if (node.left == null && node.right == null) {
      return [node.value];
    }
    if (node.left !== null) {
      left = this.post_order(node.left);
    }
    if (node.right !== null) {
      right = this.post_order(node.right);
    }
    return left.concat(right).concat([node.value]);
  };

  this.pre_order = function (node) {
    if (node == null) {
      node = head;
    }
    var right = [];
    var left = [];
    if (node.left == null && node.right == null) {
      return [node.value];
    }
    if (node.left !== null) {
      left = this.pre_order(node.left);
    }
    if (node.right !== null) {
      right = this.pre_order(node.right);
    }
    return [node.value].concat(left).concat(right);
  };

  this.breadth_first = function (node) {
    var ordered_nodes = [];
    if (node == null) {
      node = head;
    }
    var queue = [];
    queue.push(node);
    while(queue.length > 0){
        node = queue.shift();
        ordered_nodes.push(node.value);
        if(node.left != null) queue.push(node.left);
        if(node.right != null) queue.push(node.right);
    }
    return ordered_nodes;
  };
}

module.exports = {
  BinaryNode: BinaryNode,
  BinaryTree: BinaryTree
};
