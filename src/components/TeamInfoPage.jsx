var React = require('react');
var SeasonInfo = require('./SeasonInfo.jsx');
var TeamInfoHeader = require('./TeamInfoHeader.jsx');

var TeamInfoPage = React.createClass({
  render : function() {
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
                  year="2015-16"
                  conferenceRank="2nd"
                  conference="East"
                  divisionRank="1st"
                  division="Atlantic"
                  wins="33"
                  losses="16"
                  winPercentage={(0.673*100).toFixed(2)}
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
