
var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <div>
          <div>
            <h3 className="text-center">Main.jsx rendered </h3>

              {this.props.children}
          </div>

        </div>

      </div>

    );
  }
});

module.exports = Main;
