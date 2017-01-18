import { Mongo } from 'meteor/mongo'
Meteor.methods({
	'section.insert':function(section){
		 const data = {
			 ...section,
			 createdAt: new Date()
		 }
		 Section.schema.validate(data)
		 return Section.insert(data)
	}
});
export const Section = new Mongo.Collection('section')
Section.schema = new SimpleSchema({
	createdAt: {type: Date},
	templateId: {type: String},
	fields: {type: [Object]}
})
