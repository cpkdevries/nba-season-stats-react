var React = require('react');
var SeasonInfo = require('./SeasonInfo.jsx');
var TeamInfoHeader = require('./TeamInfoHeader.jsx');
var Reflux = require('reflux');
var Actions = require('../Reflux/Actions.jsx');
var TeamStore = require('../Reflux/TeamStore.jsx');
var helpers = require('../helpers/helpers');

var TeamInfoPage = React.createClass({
  mixins:[Reflux.listenTo(TeamStore, 'onChange')],
  getInitialState : function() {
    return({teamInfo: []});
  },
  componentWillMount : function() {
    Actions.getTeamInfo('2014-15', '1610612761', 'Regular%20Season');
  },
  onChange : function(event, teamInfo) {
    this.setState({teamInfo: teamInfo});
  },
  render : function() {
    //console.log(teamInfo);
    if(this.state.teamInfo.resultSets) {
      // Team statistics for top panel
      var teamInformation = this.state.teamInfo.resultSets[0].rowSet[0];
      var statsHeaders = this.state.teamInfo.resultSets[0].headers;
      var year = teamInformation[statsHeaders.indexOf("SEASON_YEAR")];
      var conferenceRank = helpers.humanizeNumber(teamInformation[statsHeaders.indexOf("CONF_RANK")]);
      var teamConference = teamInformation[statsHeaders.indexOf("TEAM_CONFERENCE")];
      var divisionRank = helpers.humanizeNumber(teamInformation[statsHeaders.indexOf("DIV_RANK")]);
      var teamDivision = teamInformation[statsHeaders.indexOf("TEAM_DIVISION")];
      var wins = teamInformation[statsHeaders.indexOf("W")];
      var losses = teamInformation[statsHeaders.indexOf("L")];
      var winPct = helpers.humanizePercentage(teamInformation[statsHeaders.indexOf("PCT")]);

      // Team Ranks (body)
      var ranksHeaders = this.state.teamInfo.resultSets[1].headers;
      var teamRanks = this.state.teamInfo.resultSets[1].rowSet[0];
      var pointsRank = teamRanks[ranksHeaders.indexOf("PTS_RANK")];
      var ppg = teamRanks[ranksHeaders.indexOf("PTS_PG")];
      var assistsRank = teamRanks[ranksHeaders.indexOf("AST_RANK")];
      var apg = teamRanks[ranksHeaders.indexOf("AST_PG")];
      var reboundsRank = teamRanks[ranksHeaders.indexOf("REB_RANK")];
      var rpg = teamRanks[ranksHeaders.indexOf("REB_PG")];
      var opponentsPointsRank = teamRanks[ranksHeaders.indexOf("OPP_PTS_RANK")];
      var oppg = teamRanks[ranksHeaders.indexOf("OPP_PTS_PG")];



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
                  pointsRank={pointsRank}
                  ppg={ppg}
                  assistsRank={assistsRank}
                  apg={apg}
                  reboundsRank={reboundsRank}
                  rpg={rpg}
                  opponentPointsRank={opponentsPointsRank}
                  oppg={oppg}
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
