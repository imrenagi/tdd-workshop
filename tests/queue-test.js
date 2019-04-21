var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Queue = require('./../src/queue');

describe('Queue', function() {
  it('A queue is empty on construction', function() {
    var queue = new Queue([]);
    expect(queue.isEmpty()).to.true
  });  
  it('A queue has size 0 on construction', function() {
    var queue = new Queue([]);
    expect(queue.size()).to.equal(0)
  });  

  it('queue push jadinya ga kosong dan size nya N', function() {
    var queue = new Queue([]);
    queue.push(1)
    queue.push(1)
    queue.push(1)

    expect(queue.size()).to.equal(3)
    expect(queue.isEmpty()).to.false
  });  

  it('After push 1,2,3 respectively, the elements order in the queue must be [1,2,3]', function() {
    var queue = new Queue([]);
    queue.push(1)
    queue.push(2)
    queue.push(3)

    expect(queue.arr).to.eql([1,2,3])

  });  

});