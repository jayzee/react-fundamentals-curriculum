var React = require('react');


var PromptContainer = React.createClass({
    getInitialSate: function () {
      return {
        cityAndState: ''
      }
    },
    handleSubmitUser: function (e) {
      e.preventDefault();
      var cityAndState = this.state.cityAndState;
    // more stuff neeeded for the link to work.

  },

  handleUpdateUser: function (event) {
    this.setState({
      cityAndState: event.target.value
    });
  },
  render: function (){
    return (

    )

  }


})


module.exports = PromptContainer;
