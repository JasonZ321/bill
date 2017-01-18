import { Mongo } from 'meteor/mongo'

Meteor.methods({
	'company.insert':function(company){
		 const data = {
			 ...company,
			 createdAt: new Date()
		 }
		 Company.schema.validate(data)
		 return Company.insert(data)
	}
});

export const Company = new Mongo.Collection('company');
Company.schema = new SimpleSchema({
	name: {type:String},
	avatarURL: {type:String, optional: true},
	email: {type:String},
	createdAt: {type: Date}
});
