var React = require('react');

var SeasonInfo = React.createClass({
  render : function() {
    var bold = {
      fontWeight: "bold"
    };
    return (
      <div className="season-info">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h2>Season Ranks</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p style={bold}>Points</p>
          </div>
          <div className="col-xs-6">
            <p>{this.props.pointsRank} ({this.props.ppg} Per Game)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p style={bold}>Rebounds</p>
          </div>
          <div className="col-xs-6">
            <p>{this.props.reboundsRank} ({this.props.rpg} Per Game)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p style={bold}>Assists</p>
          </div>
          <div className="col-xs-6">
            <p>{this.props.assistsRank} ({this.props.apg} Per Game)</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6">
            <p style={bold}>Opponent Points</p>
          </div>
          <div className="col-xs-6">
            <p>{this.props.opponentPointsRank} ({this.props.oppg} Per Game)</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SeasonInfo;
