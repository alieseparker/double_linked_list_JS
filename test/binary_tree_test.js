var binarytree = require("../lib/binary_tree.js");
var assert = require("assert");
var should = require("should");

var bt = new binarytree.BinaryTree();
var bts = new binarytree.BinaryTree();

describe("BinaryTree", function () {
  it("should return size 0 before inserting anything", function() {
    should.equal(bt.size(), 0);
  });
  it("should insert into the BinaryTree", function() {
    bt.insert(5);
    bt.insert(4);
    bt.insert(3);
    should.equal(bt.size(), 3);
  });
  it("should return true if it contains a value", function() {
    should.equal(bt.contains(4), true);
  });
  it("should return false if it doesn't contain a value", function() {
    should.equal(bt.contains(10), false);
  });
  it("should return the depth of the tree", function() {
    should.equal(bt.depth(), 3);
  });
  it("should return the balance of the tree", function() {
    should.equal(bt.balance(), -2);
  });
});

describe("Traversing a BinaryTree", function () {
  bts.insert("F");
  bts.insert("B");
  bts.insert("G");
  bts.insert("A");
  bts.insert("D");
  bts.insert("I");
  bts.insert("C");
  bts.insert("E");
  bts.insert("H");
  it("should return in_order of the binary tree", function () {
    assert.notStrictEqual(bts.in_order(), ["A","B","C","D","E","F","G","H","I"]);
  });
  it("should return pre_order of the binary tree", function () {
    assert.notStrictEqual(bts.pre_order(), ["F","B","A","D","C","E","G","I","H"]);
  });
  it("should return post_order of the binary tree", function () {
    assert.notStrictEqual(bts.post_order(), ["A","C","E","D","B","H","I","G","F"]);
  });
  it("should return breadth_first of the binary tree", function () {
    assert.notStrictEqual(bts.breadth_first(), ["F","B","G","A","D","I","C","E","H"]);
  });
});