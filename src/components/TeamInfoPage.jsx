var React = require('react');
var SeasonInfo = require('./SeasonInfo.jsx');
var TeamInfoHeader = require('./TeamInfoHeader.jsx');
var Reflux = require('reflux');
var Actions = require('../Reflux/Actions.jsx');
var TeamStore = require('../Reflux/TeamStore.jsx');
var helpers = require('../helpers/helpers');
var Loader = require('react-loader');

var TeamInfoPage = React.createClass({
  mixins:[Reflux.listenTo(TeamStore, 'onChange')],
  getInitialState : function() {
    return({teamInfo: [], currentSeason: '2015-16', previousSeason: '', nextSeason: '', loaded: false, disablePreviousButton: false, disableNextButton: false, teamId: this.props.params.teamId});
  },
  componentDidUpdate : function() {
    if (this.state.currentSeason === this.state.previousSeason || this.state.currentSeason === this.state.nextSeason) {
      this.getPrevAndNextSeasons();
      this.getTeamSeasonInfo();
    }
  },
  componentWillReceiveProps : function(nextProps) {
    this.setState({ teamId: nextProps.params.teamId, currentSeason: '2015-16', previousSeason: '2015-16', nextSeason: '2015-16', loaded: false });
  },
  componentDidMount : function() {
    this.getPrevAndNextSeasons();
    this.getTeamSeasonInfo();
  },
  onChange : function(event, teamInfo) {
    if(this.isMounted()) {
      this.setState({teamInfo: teamInfo, loaded: true});
    }
  },
  previousSeasonClick : function() {
    this.setState({currentSeason: this.state.previousSeason, loaded: false});
  },
  nextSeasonClick : function() {
    this.setState({currentSeason: this.state.nextSeason, loaded: false});
  },
  getTeamSeasonInfo : function() {
    Actions.getTeamInfo(this.state.currentSeason, this.state.teamId, 'Regular%20Season'); // thunder
  },
  getPrevAndNextSeasons : function() {
    var currentSeason = this.state.currentSeason;
    var lastNumber = parseInt(currentSeason.slice(-2)) - 1;
    if(lastNumber === -1) {
      lastNumber = 99;
    }
    var previousYear = parseInt((currentSeason).slice(0,4)) - 1;
    if (lastNumber.toString().length === 1) {
      lastNumber = '0' + lastNumber.toString();
    }
    var nextNumber = parseInt(currentSeason.slice(-2)) + 1;
    var nextYear = parseInt(currentSeason.slice(0, 4)) + 1;
    if (nextNumber.toString().length === 1) {
      nextNumber = '0' + nextNumber.toString();
    }

    var previousSeason = previousYear + '-' + lastNumber;
    var nextSeason = nextYear + '-' + nextNumber;
    this.setState({previousSeason: previousSeason, nextSeason: nextSeason});
  },
  onLoad : function() {
    this.setState({loaded: true})
  },
  render : function() {
    if(this.state.teamInfo.resultSets) {
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
      var imgSrc = helpers.getImageSource(teamInformation[statsHeaders.indexOf("TEAM_CITY")] + " " + teamInformation[statsHeaders.indexOf("TEAM_NAME")]);
      var yearEntered = teamInformation[statsHeaders.indexOf("MIN_YEAR")];

      // Team Ranks (body)
      var ranksHeaders = this.state.teamInfo.resultSets[1].headers;
      var teamRanks = this.state.teamInfo.resultSets[1].rowSet[0];
      var pointsRank = helpers.humanizeNumber(teamRanks[ranksHeaders.indexOf("PTS_RANK")]);
      var ppg = teamRanks[ranksHeaders.indexOf("PTS_PG")];
      var assistsRank = helpers.humanizeNumber(teamRanks[ranksHeaders.indexOf("AST_RANK")]);
      var apg = teamRanks[ranksHeaders.indexOf("AST_PG")];
      var reboundsRank = helpers.humanizeNumber(teamRanks[ranksHeaders.indexOf("REB_RANK")]);
      var rpg = teamRanks[ranksHeaders.indexOf("REB_PG")];
      var opponentsPointsRank = helpers.humanizeNumber(teamRanks[ranksHeaders.indexOf("OPP_PTS_RANK")]);
      var oppg = teamRanks[ranksHeaders.indexOf("OPP_PTS_PG")];
      return (
        <Loader loaded={this.state.loaded}>
          <div className="panel panel-default">

            <div className="panel-heading">
              <TeamInfoHeader
                path={imgSrc}
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
                onLoad={this.onLoad}
                yearEntered={yearEntered}
              />
              <button onClick={this.previousSeasonClick} disabled={this.state.disablePreviousButton}>Previous Season</button>
              <button onClick={this.nextSeasonClick} disabled={this.state.disableNextButton}>Next Season</button>
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
        </Loader>
      );
      document.getElementById('asdf').disabled = 'disabled';
    } else {
      return <p>Loading..</p>
    }
  }
});


module.exports = TeamInfoPage;
