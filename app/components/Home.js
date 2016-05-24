var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');
var Prompt = require('./Prompt')

var Home = React.createClass({
  render: function (){
    return (
      <div style={styles}>
      <h1>Enter a City and State</h1>

      </div>
      )
  }

});

module.exports = Home;
