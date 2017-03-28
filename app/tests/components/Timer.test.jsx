var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer',()=>{
  it('should start timer when status changes to start ',(done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.onChangeStatus('started');

    expect(timer.state.count).toBe(0);
    setTimeout(()=>{
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });
});
