var linkedlist = require("../lib/linked_list.js");
var assert = require("assert");
var should = require("should");

var ll = new linkedlist.LinkedList();


describe("DoubleLinkedList", function () {
  it("should return size 0 before inserting anything", function() {
    should.equal(ll.size(), 0);
    })

  it('search should return null because node is not there', function () {
    should.equal(ll.search('forrest'), null);
  })

  it('toString should return empty string because list is empty', function () {
    should.equal(ll.toString(), "");
    })

  it("should return size of array after inserting", function () {
    ll.insert('hi');
    ll.insert('my');
    ll.insert('name');
    ll.insert('is');
    ll.insert('forrest');

    should.equal(ll.size(), 5);
  })

  it('should return the node whose value we searched for', function () {
    should.equal('forrest', ll.search('forrest').value);
  })

  it('should remove a node', function () {
    ll.remove('hi');
    should.equal(null, ll.search('hi'));
    should.equal(ll.size(), 4);
  })

  it('should return a string', function () {
    should.equal(ll.toString(), "my, name, is, forrest");
  })
})