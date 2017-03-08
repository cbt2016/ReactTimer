var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm',()=>{
  it('should exist',()=>{
      expect(CountdownForm).toExist();
  });

  it('test if onSetCountdown(on parent) has been called when valid seconds entered',()=>{
    var spy = expect.createSpy();
    var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/> );
    var $el = $(ReactDOM.findDOMNode(countDownForm));
    var form = countDownForm.refs.form;

    //
     countDownForm.refs.seconds.value = '109';
     TestUtils.Simulate.submit(form); 
    //
     expect(spy).toHaveBeenCalledWith(109);
  });
});
