import React from 'react';
import { getTrackerLoader } from '../../../imports/utils/common';
import CompanyHome from './company_home';
import { compose } from 'react-komposer';
import { Company } from '../../../imports/collection/company';

function reactiveMapper(props, onData) {
	if(Meteor.subscribe('currentCompany').ready()) {
		const company = Company.findOne({});
		if(company) {
			onData(null, {company, authorized: true});
		} else {
			onData(null, {null, authorized: false});
		}
	}
}

export default compose(getTrackerLoader(reactiveMapper))(CompanyHome)
