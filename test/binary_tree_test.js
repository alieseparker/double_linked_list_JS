var binarytree = require("../lib/binary_tree.js");
var assert = require("assert");
var should = require("should");

var bt = new binarytree.BinaryTree();

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