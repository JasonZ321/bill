import React from 'react';
import { getTrackerLoader, getIdByURL } from '../../../imports/utils/common';
import SheetHome from './sheet_home';
import { compose } from 'react-komposer';
import { Template } from '../../../imports/collection/template';

function reactiveMapper(props, onData) {
	const url = props.location.pathname;
	const companyId = getIdByURL(url, '/company/');
	if(Meteor.subscribe("templates", companyId).ready()) {
		const templates = Template.find({companyId}).fetch();
		onData(null, {templates, companyId});
	}
}

export default compose(getTrackerLoader(reactiveMapper))(SheetHome)
