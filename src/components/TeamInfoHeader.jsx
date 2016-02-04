var React = require('react');
var TeamLogo = require('./TeamLogo.jsx');

var TeamInfoHeader = React.createClass({
  render : function() {
    var bold = {
      fontWeight: "bold"
    };
    return (
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <TeamLogo path={this.props.path} alt={this.props.alt} width="300" />
        </div>
        <div className="col-sm-6 col-xs-12">
          <h3>{this.props.year} Season</h3>
          <h4>{this.props.conferenceRank} in the {this.props.conference}</h4>
          <h4>{this.props.divisionRank} in the {this.props.division}</h4>
          <div className="text-left">
            <div className="row">
              <div className="col-xs-6">
                <p style={bold}>Record:</p>
              </div>
              <div className="col-xs-6">
                {this.props.wins}-{this.props.losses}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p style={bold}>Winning Percentage:</p>
              </div>
              <div className="col-xs-6">
                {this.props.winPercentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TeamInfoHeader;
