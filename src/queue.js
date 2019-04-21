function Queue() {
    this.arr = []
}

Queue.prototype.isEmpty = function() {
  return this.size() == 0;
};

Queue.prototype.size = function() {
    return this.arr.length;
}

Queue.prototype.push = function(numb) {
    this.arr.push(numb);
}

module.exports = Queue;