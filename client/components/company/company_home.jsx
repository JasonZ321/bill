import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../header';

class CompanyHome extends Component{
	onLogout(event) {
		event.preventDefault();
		Meteor.logout(function() {
			console.log('Logged out');
			browserHistory.push('/');
		});
	}
	navigateToTemplatePage() {
		const companyId = this.props.company._id;
		const url = `/company/${companyId}/template`;
		browserHistory.push(url);
	}
	render() {
		if(this.props.authorized) {
			return (
				<MuiThemeProvider muiTheme={getMuiTheme()}>
					<div>
						<Header company={this.props.company} onLogout={this.onLogout}/>
						{this.props.children}
					</div>
				</MuiThemeProvider>
			)
		} else {
			const url = '/login'
			return (<Link to={url}><h3>请登录</h3></Link>)
		}
	}
}

export default CompanyHome
