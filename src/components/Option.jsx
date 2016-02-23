var React = require('react');

var Option = React.createClass({
  render : function() {
      return (
        <option value={this.props.optionVal}>{this.props.optionVal} Season</option>
      );
  }
});

module.exports = Option;
