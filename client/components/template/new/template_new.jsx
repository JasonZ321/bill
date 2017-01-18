import React, { Component } from 'react';
import TemplateSection from '../section/template_section';
import NewSectionPopup from './new_section_popup';
import RaisedButton from 'material-ui/RaisedButton';

class NewTemplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [],
			popupOpen: false
		}
	}
	renderSections() {
		return this.state.sections.map( section => {
			return <TemplateSection section={section} />
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
	renderAddSectionButton() {
		return <div style={{'textAlign': 'right', 'marginTop': 20, 'marginRight': 20}}>
			<RaisedButton onClick={this.openPopup.bind(this)} primary={true} label='添加区域'/>
			<NewSectionPopup isOpen={this.state.popupOpen} onCancel={this.closePopup.bind(this)} addNewSection={this.addNewSection.bind(this)} />
		</div>
	}
	render() {
		return (
			<div>
				{this.renderAddSectionButton()}
				{this.renderSections()}
			</div>
		)
	}
}

export default NewTemplate;
