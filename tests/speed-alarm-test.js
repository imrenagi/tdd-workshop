var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var sinon = require('sinon');
var SpeedAlarm = require('../src/speed-alarm');
var speedometer = require('../src/speedometer');


describe('CarAlarm', function() {

  beforeEach(function() {
    
  })

  afterEach(function() {
    
  })
  it('check returns true if speed is below 50', function() {
    // var speedo = new Speedometer();
    var speedo = new speedometer()
    var alarm = new SpeedAlarm(speedo);

    console.log("test")
    sinon.mock(speedo).expects("speed").returns(40)    
    expect(alarm.check()).to.true;

    sinon.mock(speedo).verify();
  });  
});