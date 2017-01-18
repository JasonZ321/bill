import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import {login} from '../../../imports/api/user_api';
import FlatButton from 'material-ui/FlatButton';
class Login extends Component {
	constructor(props) {
		super(props);
	}
	navigateToUserPage(userId) {
		const url = `/company/${userId}`;
		browserHistory.push(url);
	}
	onLogin(event) {
		event.preventDefault();
		const self = this;
		const {username, password} = this.refs;
		if (username.value && password.value) {
			login(username.value, password.value, function({userId}) {
				self.navigateToUserPage(userId);
			});
		} else {
			alert('Invalid input!');
		}
	}
	onSignUp(event) {
		event.preventDefault();
		const url = '/signupnewcompany';
		browserHistory.push(url);
	}
	render() {
		return (
			<div>
				<form className="form-signin">
					<label className="sr-only" for="username">用户名:</label>
					<input className='form-control' type="text" ref='username' placeholder="用户名" id='username'/>
					<label className="sr-only" for="password">密码:</label>
					<input className='form-control' type="text" ref='password' placeholder="密码" id='password'/>
					<FlatButton backgroundColor="#2196F3" className="start-but" onClick={this.onLogin.bind(this)} label="登陆"/>
					<FlatButton backgroundColor="#2196F3" className="start-but" onClick={this.onSignUp.bind(this)} label="注册新公司"/>
				</form>
			</div>
		);

	}
}

export default Login;
