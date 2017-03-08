var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');


var Controls = require('Controls');

describe('Controls',()=>{
  it('should exist',()=>{
    expect(Controls).toExist();
  });

  it('should render pause when started',()=>{
    var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
    var $el = $(ReactDOM.findDOMNode(controls));
    var $renderBtn = $el.find('button:contains(Pause)');

    expect($renderBtn.length).toBe(1);
  });
});
