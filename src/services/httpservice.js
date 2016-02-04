var Fetch = require('whatwg-fetch');
var FetchJsonp = require('fetch-jsonp');
var baseUrl = "http://stats.nba.com";

var service = {
  getTeamInfo: function(url) {
    return FetchJsonp(baseUrl + url)
    .then(function(response) {
      return response.json();
    });
  }
};

module.exports = service;
