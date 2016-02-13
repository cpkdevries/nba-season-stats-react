var React = require('react');
var TeamListing = require('./TeamListing.jsx');

var eastTeamInfo = [
  {
    "id": "1610612761",
    "img": "../img/toronto-raptors.png"
  },
  {
    "id": "1610612738",
    "img": "../img/boston-celtics.png"
  },
  {
    "id": "1610612741",
    "img": "../img/chicago-bulls.png"
  },
  {
    "id": "1610612737",
    "img": "../img/atlanta-hawks.png"
  },
  {
    "id": "1610612751",
    "img": "../img/brooklyn-nets.png"
  },
  {
    "id": "1610612739",
    "img": "../img/cleveland-cavaliers.png"
  },
  {
    "id": "1610612766",
    "img": "../img/charlotte-hornets.png"
  },
  {
    "id": "1610612752",
    "img": "../img/new-york-knicks.png"
  },
  {
    "id": "1610612748",
    "img": "../img/miami-heat.png"
  },
  {
    "id": "1610612765",
    "img": "../img/detroit-pistons.png"
  },
  {
    "id": "1610612755",
    "img": "../img/philadelphia-76ers.png"
  },
  {
    "id": "1610612754",
    "img": "../img/indiana-pacers.png"
  },
  {
    "id": "1610612753",
    "img": "../img/orlando-magic.png"
  },
  {
    "id": "1610612749",
    "img": "../img/milwaukee-bucks.png"
  },
  {
    "id": "1610612764",
    "img": "../img/washington-wizards.png"
  },
];
var westTeamInfo = [
  {
    "id": "1610612743",
    "img": "../img/denver-nuggets.png"
  },
  {
    "id": "1610612744",
    "img": "../img/golden-state-warriors.png"
  },
  {
    "id": "1610612742",
    "img": "../img/dallas-mavericks.png"
  },
  {
    "id": "1610612750",
    "img": "../img/minnesota-timberwolves.png"
  },
  {
    "id": "1610612746",
    "img": "../img/los-angeles-clippers.png"
  },
  {
    "id": "1610612745",
    "img": "../img/houston-rockets.png"
  },
  {
    "id": "1610612760",
    "img": "../img/oklahoma-city-thunder.png"
  },
  {
    "id": "1610612747",
    "img": "../img/los-angeles-lakers.png"
  },
  {
    "id": "1610612763",
    "img": "../img/memphis-grizzlies.png"
  },
  {
    "id": "1610612757",
    "img": "../img/portland-trail-blazers.png"
  },
  {
    "id": "1610612756",
    "img": "../img/phoenix-suns.png"
  },
  {
    "id": "1610612740",
    "img": "../img/new-orleans-pelicans.png"
  },
  {
    "id": "1610612762",
    "img": "../img/utah-jazz.png"
  },
  {
    "id": "1610612758",
    "img": "../img/sacramento-kings.png"
  },
  {
    "id": "1610612759",
    "img": "../img/san-antonio-spurs.png"
  },
];

var BasePage = React.createClass({
  render : function() {
    var logoLinkStyles = {
      display: "flex",
      flexWrap: "wrap",
      border: "1px solid black",
      boxShadow: "4px 4px 4px #d3d3d3",
      justifyContent: "center"
    }
    var eastTeams = eastTeamInfo.map(function(team) {
      return <TeamListing key={team.id} imgSrc={team.img} id={team.id} />;
    });
    var westTeams = westTeamInfo.map(function(team) {
      return <TeamListing key={team.id} imgSrc={team.img} id={team.id} />;
    });
    var rowStyle = {
      marginTop: 0,
      marginBottom: 20,
      padding: "30 5",
      background: "#DBDBCE",
      boxShadow: "5px 5px 5px #333",
      borderStyle: "solid",
      borderWidth: "0 2px 2px 2px"
    }
    var footer = {
      minHeight: 100,
      padding: 20,
      background: "#565656",
      color: "#fff"
    };
    var footerContainer = {
      padding: 0
    };
    return (
      <div>
        <div className="container">
          <div className="row" style={rowStyle}>
            <div className="col-sm-3 col-xs-12">
              <h3>West Teams</h3>
              <div className="team-logo-links" style={logoLinkStyles}>
                {westTeams}
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              {this.props.children}
            </div>
            <div className="col-sm-3 col-xs-12">
              <h3>East Teams</h3>
              <div className="team-logo-links" style={logoLinkStyles}>
                {eastTeams}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={footerContainer}>
          <div className="row">
            <div className="col-xs-12">
              <footer style={footer}>Footer info wooooo</footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
