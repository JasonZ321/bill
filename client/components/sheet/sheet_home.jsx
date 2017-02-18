import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TemplateChoicePopup from './template_choice_popup';
import {browserHistory} from 'react-router';
export default class NewSheetHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			popupOpen: false
		}
	}
	openTemplteChoicePopup() {
		this.setState({popupOpen: true});
	}
	closeTemplateChoicePopup() {
		this.setState({popupOpen: false});
	}
	confirmCreateNewBill(template) {
		this.setState({popupOpen: false});
		const url = `/company/${this.props.companyId}/sheet/new`;
		browserHistory.push(url);
	}
	renderAddButton() {
		return <div style={{'text-align': 'right', 'marginBottom': 20, 'marginRight': 20}}>
			<TemplateChoicePopup isOpen={this.state.popupOpen} templates={this.props.templates} onCancel={this.closeTemplateChoicePopup.bind(this)} onConfirm={this.confirmCreateNewBill.bind(this)} />
			<FloatingActionButton onClick={this.openTemplteChoicePopup.bind(this)} ><ContentAdd /></FloatingActionButton>
		</div>
	}
	render() {
		return <div>
			{this.renderAddButton()}
		</div>
	}
}
