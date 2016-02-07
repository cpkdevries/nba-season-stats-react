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
  }
];

var BasePage = React.createClass({
  render : function() {
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
              {teams}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = BasePage;
