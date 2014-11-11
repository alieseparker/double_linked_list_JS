var linkedlist = require("../lib/linked_list.js");
var assert = require("assert");
var should = require("should");

var ll = new linkedlist.LinkedList();

describe("Dedupe", function () {
  it("fill a list and then check for duplicates", function() {
    ll.fillRandom(200, 100);
    ll.dedupe();
    console.log(ll);
  });
});
