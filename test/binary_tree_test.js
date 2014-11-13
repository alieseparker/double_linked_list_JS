var binarytree = require("../lib/binary_tree.js");
var assert = require("assert");
var should = require("should");

var bt = new binarytree.BinaryTree();

describe("BinaryTree", function () {
  it("should return size 0 before inserting anything", function() {
    should.equal(bt.size(), 0);
  });
});