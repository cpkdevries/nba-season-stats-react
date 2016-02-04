var Reflux = require('reflux');
var Actions = require('./Actions.jsx');
var HTTP = require('../services/httpservice');

var TeamStore = Reflux.createStore({
  listenables:[Actions],
  getTeamInfo : function(season, teamId, seasonType) {
    HTTP.getTeamInfo('/stats/teaminfocommon/?Season=' + season + '&TeamID=' + teamId + '&LeagueID=00&SeasonType=' + seasonType)
    .then(function(jsonResponse) {
      this.teamInfo = jsonResponse;
      this.fireUpdate();
    }.bind(this));
  },
  fireUpdate : function() {
    // trigger the change so that all listeners get notified. Trigger is a reserved Reflux function.
    this.trigger('change', this.teamInfo); // this.teamInfo returns the data to the views.
  }
});

module.exports = TeamStore;
