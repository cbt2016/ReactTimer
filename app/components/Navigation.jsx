var React = require('react');
var {Link,IndexLink} = require('react-router');

var Navigation = React.createClass({

  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text" >React Timer</li>
            <li><IndexLink to="/" activeClassName="acive-link">Timer</IndexLink></li>
            <li><Link to="/" activeClassName="acive-link">CountDown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="#" target="_blanc">Lionnie</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Navigation;
