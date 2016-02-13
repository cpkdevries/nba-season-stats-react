var React = require('react');

var TeamLogo = React.createClass({
  render : function() {
    var imgStyle = {
      height: 250,
      height: "auto"
    };
    if (this.props.height){
      imgStyle.height = this.props.height;
    }
    return (
      <img style={imgStyle} src={this.props.path} alt={this.props.alt} />
    );
  }
});

module.exports = TeamLogo;
