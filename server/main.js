import { Meteor } from 'meteor/meteor';
import { Company } from '../imports/collection/company';
import { Template } from '../imports/collection/template';
import { Image } from '../imports/collection/image';

function setUpImageServer() {
  Image.allow({
    'insert': function() {
        // add custom authentication code here
        return true;
    },
    'update': function() {
        // add custom authentication code here
        return true;
    },
    'remove': function() {
        // add custom authentication code here
        return true;
    },
    download: function(userId, fileObj) {
        return true
    }
  });
}

function publish() {
	Meteor.publish("currentUser", function(){
		if(!this.userId) {
			return this.ready();
		}
		return Meteor.users.find({_id: this.userId});
	});
	Meteor.publish("currentCompany", function(){
		const currentUser = Meteor.users.findOne({_id: this.userId});
		if(currentUser) {
			return Company.find({_id: currentUser.companyId});
		}
	});
	Meteor.publish("templates", function(companyId){
		return Template.find({companyId});
	});
}

Meteor.startup(() => {
  // code to run on server at startup
	publish();
	Accounts.onCreateUser(function(options, user) {
    user.isAdmin = options.isAdmin;
		user.companyId = options.companyId;
    return user;
  });
});
