import { Meteor } from 'meteor/meteor';
import { Company } from '../collection/company'
export function login(username, password, callback) {
	Meteor.loginWithPassword(username, password, function (error) {
		if (error) {
			alert('wrong password or email!');
		} else {
			const userId = Meteor.userId();
			console.log("User %s logged in", userId);
			if (callback) {
				callback(userId);
			}
		}
	});
}

export function createCompanyUser({companyName, email, username, password}, callback) {
	Meteor.call('company.insert', {name: companyName, email}, function(error, companyId) {
		if (error) {
			console.log("error", error);
			if(callback) {
				callback(error);
			}
		}
		if (companyId) {
			console.log("Company %s was created.", companyId);
			Accounts.createUser({username, password, isAdmin: true, companyId}, function(error) {
				if (error) {
					console.log(error);
					Company.remove({_id: companyId});
					if (callback) {
						callback(error);
					}
				} else {
					if (callback) {
						callback(error, companyId);
					}
				}
			});
		}
	});
}
