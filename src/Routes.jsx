var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;

var BasePage = require('./components/BasePage.jsx');
var TeamInfoPage = require('./components/TeamInfoPage.jsx');
var HomePage = require('./components/HomePage.jsx');

var Routes = (
  <Router history={History}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/teams/:teamId" component={TeamInfoPage} />
    </Route>
  </Router>
);

module.exports = Routes;
