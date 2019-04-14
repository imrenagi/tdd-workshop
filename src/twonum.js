function TwoNum() {}

TwoNum.prototype.find = function(arr, target) {
    if (arr instanceof Array) {
        if (arr.length < 2) {
            throw new Error('invalid array. length must be equal or greater than 2')
        }
    }
    
  return 0;
};

module.exports = TwoNum;