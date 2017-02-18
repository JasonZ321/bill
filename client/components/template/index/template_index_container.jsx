import React from 'react';
import { getTrackerLoader, getIdByURL } from '../../../../imports/utils/common';
import TemplateIndex from './template_index';
import { compose } from 'react-komposer';
import { Template } from '../../../../imports/collection/template';
import { Company } from '../../../../imports/collection/company';

function reactiveMapper(props, onData) {
	const url = props.location.pathname;
	const companyId = getIdByURL(url, '/company/');
	if(Meteor.subscribe("templates", companyId).ready()) {
		const templates = Template.find({companyId}).fetch();
		const company = Company.findOne({_id: companyId});
		const defaultTemplate = Template.findOne({_id: company.defaultTemplateId});
		if(defaultTemplate) {
				onData(null, {templates: [defaultTemplate, ...templates], company});
		} else {
			onData(null, {templates, company});
		}

	}
}


export default compose(getTrackerLoader(reactiveMapper))(TemplateIndex)
