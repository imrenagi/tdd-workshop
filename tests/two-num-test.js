var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var assert = chai.assert;
var TwoNum = require('../src/twonum.js');

describe('Two Num', function() {
  it('given the array size less than 2, return error', function() {
    var twonum = new TwoNum()
    expect(() => twonum.find([1], 10)).to.throw('invalid array. length must be equal or greater than 2')    
  });  

  it('given valid array, a valid target found, return all indices', function() {
    var twonum = new TwoNum()
    expect(twonum.find([1,2,3], 3)).to.eql([1,2])
    expect(twonum.find([8,6,3,4], 10)).to.eql([6,4])
  }) 

  it('given valid array, a non-exist target, return empty indices', function() {
    var twonum = new TwoNum()
    expect(twonum.find([1,2,3], 7)).to.eql([])
  })

});