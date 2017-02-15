import React, { Component } from 'react';
import TemplateSection from '../section/template_section';
import NewSectionPopup from '../new/new_section_popup';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { updateTemplate } from '../../../../imports/api/template_api';
import { getIdByURL } from '../../../../imports/utils/common';
import { browserHistory } from 'react-router';
import Divider from 'material-ui/Divider';

class TemplateDetail extends Component {
	constructor(props) {
		super(props);
		const url = props.location.pathname;
		const companyId = getIdByURL(url, '/company/');
		this.state = {
			sections: this.props.template.sections,
			name: this.props.template.name,
			popupOpen: false,
			companyId
		}
	}
	renderSections() {
		return this.state.sections.map( section => {
			return <TemplateSection key={section.name} section={section} updateSection={this.updateSection.bind(this)}/>
		});
	}
	openPopup() {
		this.setState({
			popupOpen: true
		})
	}
	closePopup() {
		this.setState({
			popupOpen: false
		})
	}
	addNewSection(name) {
		const newSection = {name, fields:[]};
		this.setState({
			sections: [...this.state.sections, newSection]
		});
		this.closePopup();
	}
	updateSection(sectionForUpdate) {
		debugger;
		const updatedSections = this.state.sections.map( section => {
			if(section.name === sectionForUpdate.name) {
				return sectionForUpdate;
			}
			return section;
		});
		this.setState({
			sections: updatedSections
		});
	}
	updateTemplate() {
		const {sections, companyId} = this.state;
		const name = this.refs.name.getValue();
		debugger;
		const template = {
			name,
			sections,
			companyId
		}
		updateTemplate(this.props.template._id, template, () => {
			const url = `/company/${companyId}/template`;
			browserHistory.push(url);
		});
	}
	renderHeaderButton() {
		return <div style={{'textAlign': 'right', 'marginTop': 20, 'marginRight': 20}}>
			<RaisedButton onClick={this.openPopup.bind(this)} primary={true} label='添加区域'/>
			<NewSectionPopup isOpen={this.state.popupOpen} onCancel={this.closePopup.bind(this)} addNewSection={this.addNewSection.bind(this)} />
			<div style={{'textAlign': 'center'}} >
				<TextField defaultValue={this.state.name} ref='name'/>
			</div>
		</div>
	}
	cancel() {
		const url = `/company/${this.state.companyId}/template`;
		browserHistory.push(url);
	}
	renderFooterButton() {
		return <div style={{'textAlign': 'bottom', 'marginTop': 20, 'marginRight': 20}}>
			<RaisedButton onClick={this.updateTemplate.bind(this)} primary={true} label='保存'/>
			<RaisedButton onClick={this.cancel.bind(this)} secondary={true} label='取消'/>
		</div>
	}
	render() {
		return (
			<div>
				{this.renderHeaderButton()}
				<div>
						{this.renderSections()}
				</div>
				{this.renderFooterButton()}
			</div>
		)
	}
}

export default TemplateDetail;
