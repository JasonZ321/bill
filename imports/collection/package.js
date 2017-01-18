import { Mongo } from 'meteor/mongo'
Meteor.methods({
	'package.insert':function(package){
		 const data = {
			 ...package,
			 createdAt: new Date()
		 }
		 Package.schema.validate(data)
		 return Package.insert(data)
	}
});
export const Package = new Mongo.Collection('package')
Package.schema = new SimpleSchema({
	createdAt: {type: Date},
	createdBy: {type: String},
	lastModifiedBy: {type: String},
	templateId: {type: String},
	sections: {type: [Object]}
})
