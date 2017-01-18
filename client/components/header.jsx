import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  appBar: {
    flexWrap: 'wrap',
  },
  tabs: {
   	padding: '20px',
		width: '40%'
  }
};

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
};

class Header extends Component {
	onLogout() {
		event.preventDefault();
		Meteor.logout(function() {
			console.log('Logged out');
			browserHistory.push('/');
		});
	}
	onNavigateToHome() {
		event.preventDefault();
		browserHistory.push('/');
    location.reload();
	}
	renderShopTabs() {
		const companyId = this.props.company._id;
		const mainURL =`/company/${companyId}`;
		const templateURL = `/company/${companyId}/template`;
		const newbillURL = `/company/${companyId}/newbill`;
		const analyseURL = `/company/${companyId}/analyse`;

		return (
			<div>
				<Menu listStyle={flexContainer}>
					<MenuItem
            containerElement={<Link to={newbillURL} />}
            primaryText="开具票据"
          />
          <MenuItem
            containerElement={<Link to={templateURL} />}
            primaryText="模板管理"
          />
          <MenuItem
            containerElement={<Link to={analyseURL} />}
            primaryText="数据分析"
          />
			 	</Menu>
		</div>
		);
	}
	renderLeftButtons() {
		return (
			<div>
   			<a onClick={this.onLogout}>退出</a><br />
   		</div>
		);
	}
	render() {
		return (
			<div>
				<AppBar style={styles.appBar} title="票据系统" iconStyleRight={styles.tabs} iconElementRight={this.renderShopTabs()} iconElementLeft={this.renderLeftButtons()}/>
	 		</div>
	  );
	}
}

export default Header;
