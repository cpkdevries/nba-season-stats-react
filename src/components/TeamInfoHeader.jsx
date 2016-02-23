var React = require('react');
var TeamLogo = require('./TeamLogo.jsx');
var Option = require('./Option.jsx');

var TeamInfoHeader = React.createClass({
  getSeason : function(year) {
    var nextNumber = parseInt(parseInt(year.toString().slice(-2))) + 1;
    if (nextNumber.toString().length === 1) {
      nextNumber = '0' + nextNumber.toString();
    } else if (nextNumber.toString().length == 3) {
      nextNumber = '00';
    }
    return year + '-' + nextNumber;
  },
  render : function() {
    var bold = {
      fontWeight: "bold"
    };
    var padded = {
      padding: "0 30px"
    };
    var flex = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 70
    };

    var latestYear = this.props.maxYear;
    var earliestYear = this.props.yearEntered;

    var yearsBetween = [];
    for (var x = latestYear; x >= earliestYear; x--) {
      yearsBetween.push(this.getSeason(x));
    }

    var seasonsActive = yearsBetween.map(function(year) {
      return <Option key={year} optionVal={year} />;
    });
    return (
      <div className="row">
        <div className="col-xs-12" style={padded}>
          <div className="row">
            <div className="col-xs-6">
              <h3>{this.props.year} Season</h3>
            </div>
            <div className="col-xs-6">
              <div style={flex}>
                <select className="form-control" onChange={this.props.seasonChange} value={this.props.selectedSeason}>{seasonsActive}</select>
              </div>
            </div>
          </div>
          <button className="btn btn-default" onClick={this.props.previousSeasonClick}>Previous Season</button>
          <button className="btn btn-default" onClick={this.props.nextSeasonClick}>Next Season</button>
          <h4>{this.props.conferenceRank} in the {this.props.conference}</h4>
          <h4>{this.props.divisionRank} in the {this.props.division}</h4>
          <div className="text-left">
            <div className="row">
              <div className="col-xs-6">
                <p style={bold}>Record:</p>
              </div>
              <div className="col-xs-6 text-right">
                {this.props.wins}-{this.props.losses}
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p style={bold}>Winning Percentage:</p>
              </div>
              <div className="col-xs-6 text-right">
                {this.props.winPercentage}%
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6">
                <p style={bold}>Entered the NBA In:</p>
              </div>
              <div className="col-xs-6 text-right">
                {this.props.yearEntered}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TeamInfoHeader;
