import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './components/entry';
import Login from './components/signup/login';
import NewCompany from './components/signup/new_company';
import TemplateDetailContainer from './components/template/detail/template_detail_container';
import TemplateIndexContainer from './components/template/index/template_index_container';
import CompanyHomeContainer from './components/company/company_home_container';
import NewTemplate from './components/template/new/template_new';
import NewBill from './components/newbill/newbill';
import Analyse from './components/analyse/analyse';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const routes = (
  <MuiThemeProvider>
    <Router history={browserHistory} >
      <Route path="/" component={Entry} />
      <Route path="/login" component={Login} />
      <Route path="/signupnewcompany" component={NewCompany} />
      <Route path="/company/:companyId" component={CompanyHomeContainer} >
        <Route path='/company/:companyId/template' component={TemplateIndexContainer} />
        <Route path='/company/:companyId/template/:templateId' component={TemplateDetailContainer} />
        <Route path='/company/:companyId/newtemplate' component={NewTemplate} />
        <Route path='/company/:companyId/newbill' component={NewBill} />
        <Route path='/company/:companyId/analyse' component={Analyse} />
      </Route>
    </Router>
  </MuiThemeProvider>
);

Meteor.startup(function(){
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
