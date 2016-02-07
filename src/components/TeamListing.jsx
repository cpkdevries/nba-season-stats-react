var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TeamListing = React.createClass({
  render : function() {
    var link = "/teams/" + this.props.id;
      return (
        <div className="team-logo-links">
            <div className="col-xs-6">
              <Link to={link}><img src={this.props.imgSrc} width="100" /></Link>
            </div>
        </div>
      );
  }
});

module.exports = TeamListing;
