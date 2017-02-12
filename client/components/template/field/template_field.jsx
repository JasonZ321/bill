import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TemplateField extends Component {
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
			{this.props.field.name}:<br />
			{this.renderField()}
			<br />
		</div>
	}
}
