var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var seconds = this.refs.seconds.value;

    if(seconds.match(/^[0-9]*$/)){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds,10));
    }
  },
  render: function(){
    return (
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <input type="text" ref="seconds" placeholder="enter time in seconds"/>
        <button className="button expanded">Start</button>
      </form>
    );
  }
});

module.exports = CountdownForm;
