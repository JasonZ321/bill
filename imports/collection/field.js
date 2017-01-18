import { Mongo } from 'meteor/mongo'
Meteor.methods({
	'field.insert':function(field){
		 const data = {
			 ...field,
			 createdAt: new Date()
		 }
		 Field.schema.validate(data)
		 return Field.insert(data)
	}
});
export const Field = new Mongo.Collection('Field')
Field.schema = new SimpleSchema({
	createdAt: {type: Date},
	templateId: {type: String},
	value: {type: Object},
	type: {type: String}
})
