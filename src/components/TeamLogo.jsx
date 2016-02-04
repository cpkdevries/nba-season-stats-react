var React = require('react');

var TeamLogo = React.createClass({
  render : function() {
    var imgStyle = {
      width: 250,
      height: "auto"
    };
    if (this.props.width){
      imgStyle.width = this.props.width;
    }
    return (
      <img style={imgStyle} src={this.props.path} alt={this.props.alt} />
    );
  }
});

module.exports = TeamLogo;
