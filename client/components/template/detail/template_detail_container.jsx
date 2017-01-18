import React from 'react';
import { getTrackerLoader, getIdByURL } from '../../../../imports/utils/common';
import TemplateDetail from './template_detail';
import { compose } from 'react-komposer';
import { Template } from '../../../../imports/collection/template';

function reactiveMapper(props, onData) {
	const url = props.location.pathname;
	const companyId = getIdByURL(url, '/company/');
	const templateId = getIdByURL(url, '/template/');
	if(Meteor.subscribe("templates", companyId).ready()) {
		const template = Template.findOne({_id: templateId});
		onData(null, {template});
	}
}


export default compose(getTrackerLoader(reactiveMapper))(TemplateDetail)
