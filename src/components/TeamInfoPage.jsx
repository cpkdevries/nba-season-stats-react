var React = require('react');
var SeasonInfo = require('./SeasonInfo.jsx');
var TeamInfoHeader = require('./TeamInfoHeader.jsx');
var Reflux = require('reflux');
var Actions = require('../Reflux/Actions.jsx');
var TeamStore = require('../Reflux/TeamStore.jsx');

var TeamInfoPage = React.createClass({
  mixins:[Reflux.listenTo(TeamStore, 'onChange')],
  getInitialState : function() {
    return({teamInfo: []});
  },
  componentWillMount : function() {
    Actions.getTeamInfo('2015-16', '1610612761', 'Regular%20Season');
  },
  onChange : function(event, teamInfo) {
    this.setState({teamInfo: teamInfo});
  },
  render : function() {
    //console.log(teamInfo);
    if(this.state.teamInfo.resultSets) {
      // Team statistics for top panel
      var teamInformation = this.state.teamInfo.resultSets[0].rowSet[0];
      var arr = this.state.teamInfo.resultSets[0].headers;
      var year = teamInformation[arr.indexOf("SEASON_YEAR")];
      var conferenceRank = teamInformation[arr.indexOf("CONF_RANK")];
      var teamConference = teamInformation[arr.indexOf("TEAM_CONFERENCE")];
      var divisionRank = teamInformation[arr.indexOf("DIV_RANK")];
      var teamDivision = teamInformation[arr.indexOf("TEAM_DIVISION")];
      var wins = teamInformation[arr.indexOf("W")];
      var losses = teamInformation[arr.indexOf("L")];
      var winPct = teamInformation[arr.indexOf("PCT")].toFixed(2) * 100;


    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <TeamInfoHeader
                  path="../public/img/toronto-raptors.png"
                  width="300"
                  alt="Raptors Logo"
                  year={year}
                  conferenceRank={conferenceRank}
                  conference={teamConference}
                  divisionRank={divisionRank}
                  division={teamDivision}
                  wins={wins}
                  losses={losses}
                  winPercentage={winPct}
                />
              </div>
              <div className="panel-body">
                <SeasonInfo
                  pointsRank="5"
                  ppg="101.1"
                  assistsRank="7"
                  apg="19"
                  reboundsRank="5"
                  rpg="30"
                  opponentPointsRank="12"
                  oppg="95.2"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p>All of the team logos are going to go here, eventually.</p>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = TeamInfoPage;
