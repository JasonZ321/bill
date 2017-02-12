import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TemplateField from '../field/template_field';
import NewFieldPopup from '../new/new_field_popup';

export default class TemplateSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: [],
			popupOpen: false
		}
	}
	renderFields() {
		return this.state.fields.map( field => {
			return <TemplateField field={field} />
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
	addNewField(name, type) {
		const newField = {name, type};
		this.setState({
			fields: [...this.state.fields, newField]
		});
		this.props.section.fields = this.state.fields;
		this.closePopup();
	}
	render() {
		return <div style={{'marginLeft': 100, 'marginRight':100}}>
			<h3>{this.props.section.name}</h3>
			<RaisedButton onClick={this.openPopup.bind(this)} primary={true} label='添加区域'/>
			<NewFieldPopup isOpen={this.state.popupOpen} onCancel={this.closePopup.bind(this)} addNewField={this.addNewField.bind(this)} />
			{this.renderFields()}
			<Divider />
		</div>
	}
}
