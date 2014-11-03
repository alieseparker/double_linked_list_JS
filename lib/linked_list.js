function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

function LinkedList() {
  var head = null;
  var tail = null;

  // insert a node with the given value at the head of the list.
  this.insert = function (val) {
    var node = new Node(val, null, head);
    if (head != null) {
      head.prev = node;
    }
    head = node;
    if (tail == null) {
      tail = node;
    }
  };

  // return the length of the list.
  this.size = function () {
    var current = head;
    var count = 0;
    while (current != null) {
      count ++;
      current = current.next;
    }
    return count;
  };

  // return the node containing value 'val' in the list if present, else nil.
  this.search = function (val) {
    var current = head;
    while (current != null && current.value != val) {
      current = current.next;
    }
    return current;
  };

  // remove a node with the given value from the list.
  // Return this value. If it isn't found, return nil.
  this.remove = function (val) {
    var current = head;
    while (current != null && current.value != val) {
      current = current.next;
    }

    if (current == null) {
      return null;
    }

    var prev = current.prev;
    var next = current.next;
    prev.next = next;
    next.prev = prev;

    return current.value;
  };

  // return a string containing a comma-separated list of all values in the list
  this.toString = function () {
    var stringList = "";
    var stringVal = "";
    var current = head;
    while (current != null) {

      if (current.value == null) {
        stringVal = "null";
      } else {
        stringVal = current.value;
      }

      if (stringList == "") {
        stringList = stringVal;
      } else {
        stringList = stringList + ", " + stringVal;
      }
      current = current.next;
    }
    return stringList;
  };

}