import React, { Component } from 'react';

export default class TemplateSection extends Component {
	render() {
		debugger;
		return <fieldset>
			<legend>{this.props.section.name}</legend>
		</fieldset>
	}
}
