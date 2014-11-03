var linkedlist = require("../lib/linked_list.js");
var assert = require("assert");
var should = require("should");

var list = new linkedlist.LinkedList();


describe("DoubleLinkedList", function () {
  it("should return size 0 before inserting anything", function() {
    should.equal(list.size(), 0);
    })

  it('search should return null because node is not there', function () {
    should.equal(list.search('forrest'), null);
  })

  it('remove should return null because node is not there', function () {
    should.equal(list.remove('forrest'), null);
    })

  it('toString should return empty string because list is empty', function () {
    should.equal(list.toString(), "");
    })

  it("should return size of array after inserting", function () {
    list.insert('hi');
    list.insert('my');
    list.insert('name');
    list.insert('is');
    list.insert('forrest');

    should.equal(list.size(), 5);
  })

  it('should return the node whose value we searched for', function () {
    should.equal('forrest', list.search('forrest').value);
  })

  it('should remove a node', function () {
    list.remove('hi');
    should.equal(null, list.search('hi'));
    should.equal(list.size(), 4);
  })

  it('should return a string', function () {
    should.equal(list.toString(), "my, name, is, forrest");
  })
})