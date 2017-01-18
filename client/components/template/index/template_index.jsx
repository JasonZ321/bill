import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { browserHistory } from 'react-router';

class TemplateIndex extends Component {
	navigateToAddPage() {
		const url = `/company/${this.props.companyId}/newtemplate`;
		browserHistory.push(url);
	}
	renderAddButton() {
		return <div style={{'text-align': 'right', 'marginBottom': 20, 'marginRight': 20}}>
			<FloatingActionButton onClick={this.navigateToAddPage.bind(this)} ><ContentAdd /></FloatingActionButton>
		</div>
	}
	render() {
		return (
			<div>
				{this.renderAddButton()}
			</div>
		)
	}
}

export default TemplateIndex;
