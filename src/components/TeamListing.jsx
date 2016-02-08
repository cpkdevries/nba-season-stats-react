var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TeamListing = React.createClass({
  render : function() {
    var padded = {
      padding: 15,
      alignSelf: "center"
    };
    var link = "/teams/" + this.props.id;
      return (
        <div style={padded}>
          <Link to={link}><img src={this.props.imgSrc} width="70" /></Link>
        </div>
      );
  }
});

module.exports = TeamListing;
