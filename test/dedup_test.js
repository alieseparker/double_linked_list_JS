var linkedlist = require("../lib/linked_list.js");
var assert = require("assert");
var should = require("should");

var list = new linkedlist.LinkedList();

describe("Dedupe", function () {
  it("fill a list and then check for duplicates", function() {
    list.fillRandom(200, 100);
    list.dedupe();
    console.log(list);
  });
});
