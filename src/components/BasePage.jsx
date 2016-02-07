var React = require('react');
var TeamListing = require('./TeamListing.jsx');

var teamInfo = [
  {
    "id": "1610612761",
    "img": "../img/toronto-raptors.png"
  },
  {
    "id": "1610612744",
    "img": "../img/golden-state-warriors.png"
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
  }

];

var BasePage = React.createClass({
  render : function() {
    var logoLinkStyles = {
      display: "flex",
      flexWrap: "wrap",
      border: "1px solid mistyrose",
      justifyContent: "center"
    }
    var teams = teamInfo.map(function(team) {
      return <TeamListing key={team.id} imgSrc={team.img} id={team.id} />;
    });
    var style = {
      paddingTop: 20
    };
    return (
      <div>
        <div className="container" style={style}>
          <div className="row">
            <div className="col-sm-9 col-xs-12">
              {this.props.children}
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="team-logo-links" style={logoLinkStyles}>
                {teams}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
