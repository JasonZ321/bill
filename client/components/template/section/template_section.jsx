import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import TemplateField from '../field/template_field';
import NewFieldPopup from '../new/new_field_popup';

export default class TemplateSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fields: this.props.section.fields,
			popupOpen: false
		}
	}
	updateField(newField, oldField) {
		debugger;
		const fields = this.state.fields.map(field => {
			if(field.name === oldField.name) {
				return newField
			} else {
				return field;
			}
		});
		this.setState({fields});
	}
	deleteField(fieldForDelete) {
		debugger;
		const fields = this.state.fields.filter(field => field.name !== fieldForDelete.name);
		this.setState({fields});
		const newSection = {
			name: this.props.section.name,
			fields
		}
		this.props.updateSection(newSection);
	}
	renderFields() {
		const self = this;
		return this.state.fields.map( field => {
			return <TemplateField field={field} key={field.name}
														onFieldUpdate={ (newField) => { self.updateField(newField, field)} }
														onFieldDelete={ () => { self.deleteField(field) }} />
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
	addNewField({name, type}) {
		const newField = {name, type};
		const newFieldList = [...this.state.fields, newField];
		const newSection = {
			name: this.props.section.name,
			fields: newFieldList
		}
		this.props.updateSection(newSection);
		this.setState({
			fields: newFieldList
		});
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
