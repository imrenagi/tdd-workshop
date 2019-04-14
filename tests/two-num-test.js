var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var assert = chai.assert;
var TwoNum = require('../src/twonum.js');

describe('Two Num', function() {
  it('given the array size less than 2, return error', function() {
    var twonum = new TwoNum()
    expect(() => twonum.find([1], 10)).to.throw('invalid array. length must be equal or greater than 2')    
  });  
});