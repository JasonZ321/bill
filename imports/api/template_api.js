import uuidV1 from 'uuid/v1'

export function createTemplate(template, callback) {
	Meteor.call("template.insert", template, function(error, result){
		if(error){
			console.log("error", error);
		}
		if(result){
			console.log("template %s was created.", result);
		}
		if(callback) {
			callback(error, result);
		}
	});
}

export function updateTemplate(templateId, template, callback) {
	Meteor.call("template.update", templateId, template, function(error, result){
		if(error){
			console.log("error", error);
		}
		if(result){
			console.log("template %s was updated.", result);
		}
		if(callback) {
			callback(error, result);
		}
	});
}

export function createTemplateWithName(name, callback) {
	Meteor.call('template.insert', {name}, function(error, result) {
		if (error) {
			console.error("error", error);
		}
		if (result) {
			console.log("template %s was created.", result );
		}
		if (callback) {
			callback(error, result);
		}
	});
}

// export function addSectionToTemplate(template, name, callback) {
// 	const section = {
// 		id: uuidV1(),
// 		name,
// 		fields:[]
// 	}
// 	const template = {
// 		...template,
// 		sections: [...template.sections, section]
// 	}
// 	Meteor.call("template.update", template.id, template, function(error, result){
// 		if(error){
// 			console.log("error", error);
// 		}
// 		if(result){
// 			console.log("template %s was updated.", result );
// 		}
// 		if(callback) {
// 			callback(error, result);
// 		}
// 	});
// }
//
// export function addFieldToTemplate(template, sectionId, {type, tableLayout}, callback) {
// 	const field = {
// 		id: uuidV1(),
// 		type,
// 		tableLayout
// 	}
// 	const sections = template.sections.map( section => {
// 		if(section.id == sectionId) {
// 			const fields = [...section.fields, field]
// 			return {...section, fields}
// 		} else {
// 			return section;
// 		}
// 	})
// 	const template = {
// 		...template,
// 		sections
// 	}
// 	Meteor.call("template.update", template.id, template, function(error, result){
// 		if(error){
// 			console.log("error", error);
// 		}
// 		if(result){
// 			console.log("template %s was updated.", result );
// 		}
// 		if(callback) {
// 			callback(error, result);
// 		}
// 	});
//
// }
