import React, { Component } from 'react'
import { createCompanyUser } from '../../../imports/api/user_api';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { createImageFiles } from '../../../imports/api/image_api';

class NewCompany extends Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarURL: null
		}
	}
	cancel(event) {
		event.preventDefault();
		browserHistory.push('/login');
	}
	createNewCompany(event) {
		event.preventDefault();
		const { companyName, email, username, password } = this.refs;
		const data = {
			companyName: companyName.getValue(),
			email: email.getValue(),
			username: username.getValue(),
			password: password.getValue()
		};
		createCompanyUser(data, (error, companyId) => {
			const url = `/company/${companyId}`;
			browserHistory.push(url);
		});
	}
	render() {
		return (
			<div>
				<h1>新公司注册</h1>
					<form className="form-signin">
							<TextField floatingLabelText="公司名" ref='companyName'/><br/>
							<TextField floatingLabelText="邮箱" ref='email'/><br/>
							<TextField floatingLabelText="管理员用户名" ref='username'/><br/>
							<TextField floatingLabelText="管理员密码" ref='password'/><br/>
							<RaisedButton onClick={this.createNewCompany.bind(this)} label="保存" primary={true} />
							<RaisedButton onClick={this.cancel.bind(this)} label="取消" secondary={true} />
					</form>
			</div>
		)
	}
}

export default NewCompany;
