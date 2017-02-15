import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditFieldPopup from './edit_field_popup';

export default class TemplateField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editPopupOpen: false
		}
	}
	openEditPopup() {
		this.setState({editPopupOpen: true});
	}
	closeEditPopup() {
		this.setState({editPopupOpen: false});
	}
	renderField() {
		const { type } =  this.props.field;
		if( type === 'text_field' ) {
			return <TextField />
		} else if ( type === 'text_area') {
			return <TextField multiLine={true} rows={5} rowsMax={10} />
		}
	}
	render() {
		return <div>
			{this.props.field.name}:
			<EditFieldPopup isOpen={this.state.editPopupOpen} field={this.props.field} onCancel={this.closeEditPopup.bind(this)} updatedField={this.props.onFieldUpdate}/>
			<EditorModeEdit color="rgb(0, 188, 212)" onClick={this.props.onFieldUpdate}/>
			<ActionDelete color="rgb(0,188,212)" onClick={this.props.onFieldDelete} />
			<br />
			{this.renderField()}
			<br />
		</div>
	}
}
