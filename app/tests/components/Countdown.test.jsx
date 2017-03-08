var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var Countdown = require('Countdown');

describe('Countdown', ()=>{
  it('should exist',()=>{
    expect(Countdown).toExist();
  });

  describe('handleCountDown', ()=>{
    it('should set state to started and countdown',(done)=>{
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleCountDown(10);
      expect(countDown.state.countdownStatus).toBe('started');
      expect(countDown.state.count).toBe(10);

      setTimeout(()=>{  //here we are making an asynchronous - karma does not support that by default - we have to add the done to it func
        expect(countDown.state.count).toBe(9);
        done(); //this asynchronous call will pass now
      },1001);
    });

    it('should never set the count to a negative value ',(done)=>{
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleCountDown(1);

      setTimeout(()=>{  //here we are making an asynchronous - karma does not support that by default - we have to add the done to it func
        expect(countDown.state.count).toBe(0);
        done(); //this asynchronous call will pass now
      },3001);
    });

    it('should stop count when paused is triggered',(done)=>{
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleCountDown(3);
      countDown.handleStatusChange('paused');

      setTimeout(()=>{
        expect(countDown.state.count).toBe(3);
        expect(countDown.state.countdownStatus).toBe('paused');
        done();
      },1001);

    })
  });
});
