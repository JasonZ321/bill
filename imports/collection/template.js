import { Mongo } from 'meteor/mongo'

Meteor.methods({
	'template.insert':function(template) {
		const data = {
			...template,
			createdAt: new Date()
		}
		//Template.schema.validate(data)
		return Template.insert(data)
	},
	'template.update':function(templateId, template) {
		if(templateId) {
			return Template.update(templateId, {
				$set: { ...template}
			});
		}
	}
});

export const Template = new Mongo.Collection('template')
Template.schema = new SimpleSchema({
	companyId: {type: String, optional: true},
	name: {type: String},
	createdAt: {type: Date},
	sections: {type: [Object], optional: true}
})
