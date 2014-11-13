function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;

  this.toString = function () {
    return "value: " + this.value + "\n prev: " + this.prev + "\n next: " + this.next;
  };
}

function LinkedList() {
  var tail = null;
  var head = null;

  // insert a node with the given value at the head of the list.
  this.insert = function (value) {
    if (this.size() === 0) {
      head = new Node(value, null, null);
      tail = head;
    } else {
      var newNode = new Node(value, tail, null);
      tail.next = newNode;
      tail = newNode;
    }
  };

  // return the length of the list.
  this.size = function () {
    var current = head;
    var count = 0;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  };

  // return the node containing value 'val' in the list if present, else nil.
  this.search = function (val) {
    var current = head;
    while (current !== null && current.value !== val) {
      current = current.next;
    }
    return current;
  };

  // remove a node with the given value from the list.
  // Return this value. If it isn't found, return nil.
  this.remove = function (value) {
    if (head.value == value) {
      head = head.next;
      head.next.prev = null;
    } else if (tail.value == value) {
      tail.prev.next = null;
      tail = tail.prev;
    } else {
      var toRemove = this.search(value);
      if (toRemove === null) {
        return null;
      }
      (toRemove.prev).next = toRemove.next;
      (toRemove.next).prev = toRemove.prev;
    }
    return value;
  };

  // return a string containing a comma-separated list of all values in the list
  this.toString = function () {
    var stringList = "";
    var stringVal = "";
    var current = head;
    while (current !== null) {

      if (current.value === null) {
        stringVal = "null";
      } else {
        stringVal = current.value;
      }

      if (stringList === "") {
        stringList = stringVal;
      } else {
        stringList = stringList + ", " + stringVal;
      }
      current = current.next;
    }
    return stringList;
  };

  // Fills list with param size nodes whose values are random integers from 0 up to but not including param range
  this.fillRandom = function (size, range) {
    var i;
    for (i = 0; i < size; i++) {
      this.insert(Math.floor(Math.random() * range));
    }
  };

  // Removes duplicate values from a list containing integers from 0 through 99.
   this.dedupe = function () {
    var seenValues = [];
    var current = head;
    var deduped = true;
    var i;
    for (i = 0; i < 100; i++) {
      seenValues[i] = false;
    }
    while (current.next !== null) {
      if (seenValues[current.value] === true) {
        this.remove(current.value);
        deduped = false;
      } else {
        seenValues[current.value] = true;
      }
      current = current.next;
    }
    return deduped;
  };
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList
};
