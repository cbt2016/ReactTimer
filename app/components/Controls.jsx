var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onChangeStatus: React.PropTypes.func.isRequired
  },
  onChangeStatus: function(newStatus){
    return ()=>{
      this.props.onChangeStatus(newStatus);
    };
  },
  // componentWillReceiveProps:function(){
  //   console.log('componentWillReceiveProps');
  // },
  render: function(){
    var {countdownStatus} = this.props;

    var renderStopStartButton = ()=>{
      if(countdownStatus ==='started'){
        return <button className="button secondary" onClick={this.onChangeStatus('paused')}>Pause</button>
      }else {
        return <button className="button primary" onClick={this.onChangeStatus('started')}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStopStartButton()}
        <button className="button alert hollow" onClick={this.onChangeStatus('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
