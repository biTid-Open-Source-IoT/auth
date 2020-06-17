var Q = require('q');

var module = function() {
	var responder = {
		errorObject: {
			"error": {
				"code": 	401,
				"message": 	"Error",
				"errors":[{
					"code": 		401,
					"reason": 		"General Error",
					"message": 		"Error in Responder",
					"locaction": 	"Responder",
					"locationType": "db"
				}]
			}
		},

		response: {
			update: (result) => {
				var deferred  = Q.defer();

				deferred.resolve({
					"updated": result.n
				});

				return deferred.promise;
			},

			delete: (result) => {
				var deferred  = Q.defer();

				deferred.resolve({
					"deleted": result.n
				});

				return deferred.promise;
			},

			apps: {
				add: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						"appId": result._id
					});
					
					return deferred.promise;
				},

				get: (result) => {
					var deferred  = Q.defer();

					var tmp = {
						"role":		result.role,
						"icon":		result.icon,
						"name":		result.name,
						"appId":	result._id,
						"theme":	result.theme,
						"scopes":	result.scopes,
						"secret":	result.secret,
						"domains":	result.domains
					};

					if (typeof(result.bitid) != "undefined") {
						if (typeof(result.bitid.auth) != "undefined") {
							tmp.users 			 = result.bitid.auth.users;
							tmp.organizationOnly = result.bitid.auth.organizationOnly;
						};
					};

					deferred.resolve(tmp);
					
					return deferred.promise;
				},

				load: (result) => {
					var deferred  = Q.defer();

					deferred.resolve({
						"icon":		result.icon,
						"name":		result.name,
						"appId":	result._id,
						"theme":	result.theme,
						"scopes":	result.scopes
					});
					
					return deferred.promise;
				},

				list: (result) => {
					var deferred  = Q.defer();

					result = result.map(obj => {
						var tmp = {
							"role":		obj.role,
							"icon":		obj.icon,
							"name":		obj.name,
							"appId":	obj._id,
							"theme":	obj.theme,
							"scopes":	obj.scopes,
							"secret":	obj.secret,
							"domains":	obj.domains
						};

						if (typeof(obj.bitid) != "undefined") {
							if (typeof(obj.bitid.auth) != "undefined") {
								tmp.users 			 = obj.bitid.auth.users;
								tmp.organizationOnly = obj.bitid.auth.organizationOnly;
							};
						};
						
						return tmp;
					});

					deferred.resolve(result);
					
					return deferred.promise;
				},

				allowaccess: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						"token": 	result.token,
						"tokenId": 	result._id
					});
					
					return deferred.promise;
				}
			},

			auth: {
				auth: (result) => {
					var deferred  = Q.defer();

					deferred.resolve([{
						'email': 		result[0].email,
						'appId':	result[0].appId
					}]);

					return deferred.promise;
				},

				register: (result) => {
					var deferred  = Q.defer();

					deferred.resolve({
						"code": 	result.code,
						"userId": 	result._id
					});

					return deferred.promise;
				},

				validate: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						'passed': result
					});
					
					return deferred.promise;
				},

				allowaccess: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve([{
						'_id': 		result._id,
						'token': 	result.token
					}]);

					return deferred.promise;
				},

				authenticate: (args) => {
					var deferred  = Q.defer();

					deferred.resolve([{
						'email': args.req.body.header.email,
						'token': args.result.token
					}]);

					return deferred.promise;
				},

				retrievetoken: (result) => {
					var deferred  = Q.defer();

					deferred.resolve([{
						"_id":		result._id,
						"token":	result.token
					}]);

					return deferred.promise;
				},

				resetpassword: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						'updated': 	result.n,
						'password': result.password
					});
					
					return deferred.promise;
				}
			},

			users: {
				get: (result) => {
					var deferred  = Q.defer();

					deferred.resolve({
						'pins': 		result.pins,
						'email': 		result.email,
						'userId': 		result._id,
						'picture': 		result.picture,
						'idNumber': 	result.idNumber,
						'lastName': 	result.lastName,
						'userName': 	result.userName,
						'language': 	result.language,
						'timeZone': 	result.timeZone,
						'firstName': 	result.firstName,
						'profilePic': 	result.profilePic,
						'userSurname': 	result.userSurname,
						'mobileNumber': result.mobileNumber
					});

					return deferred.promise;
				},

				list: (result) => {
					var deferred = Q.defer();

					result = result.map(obj => {
						return {
							'email':	obj.email,
							'userId':	obj._id
						};
					});
					
					deferred.resolve(result);
					
					return deferred.promise;
				},

				getUsers: (result) => {
					var deferred  = Q.defer();
					
					result = result.map(obj => {
						return {
							"pins": 		obj.pins,
							"email": 		obj.email,
							"picture": 		obj.picture,
							"userName": 	obj.userName,
							"language": 	obj.language,
							"timeZone": 	obj.timeZone,
							"pushToken": 	obj.pushToken,
							"profilePic": 	obj.profilePic,
							"userSurname": 	obj.userSurname,
							"mobileNumber":	obj.mobileNumber
						};
					});

					deferred.resolve(result);
					
					return deferred.promise;
				}
			},

			token: {
				retrieve: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve([
						{
							"_id": 		result._id,
							"token": 	result.token
						}
					]);
					
					return deferred.promise;
				}
			},

			scopes: {
				add: (result) => {
					var deferred  = Q.defer();

					deferred.resolve({
						'scopeId': result._id
					});
					
					return deferred.promise;
				},

				get: (result) => {
					var deferred  = Q.defer();

					var tmp = {
						'url':			result.url,
						'app':			result.app,
						'role':			result.role,
						'appId':		result.appId,
						'roles':		result.roles,
						'scopeId':		result._id,
						'description':	result.description
					};

					if (typeof(result.bitid) != "undefined") {
						if (typeof(result.bitid.auth) != "undefined") {
							tmp.users =	result.bitid.auth.users;
						};
					};

					deferred.resolve(tmp);
					
					return deferred.promise;
				},

				list: (result) => {
					var deferred  = Q.defer();

					result = result.map(obj => {
						var tmp = {
							'url':			obj.url,
							'app':			obj.app,
							'role':			obj.role,
							'appId':		obj.appId,
							'roles':		obj.roles,
							'scopeId':		obj._id,
							'description':	obj.description
						};

						if (typeof(obj.bitid) != "undefined") {
							if (typeof(obj.bitid.auth) != "undefined") {
								tmp.users =	obj.bitid.auth.users;
							};
						};

						return tmp;
					});
					
					deferred.resolve(result);
					
					return deferred.promise;
				}
			},

			tokens: {
				get: (result) => {
					var deferred  = Q.defer();

					var tmp = {
						"app":			result.app,
						"role":			result.role,
						"device":		result.device,
						"scopes":		result.scopes,
						"expiry":		result.expiry,
						"tokenId":		result._id,
						"description":	result.description
					};

					if (typeof(result.bitid) != "undefined") {
						if (typeof(result.bitid.auth) != "undefined") {
							tmp.users =	result.bitid.auth.users;
						};
					};

					deferred.resolve(tmp);

					return deferred.promise;
				},

				list: (result) => {
					var deferred  = Q.defer();

					result = result.map(obj => {
						var tmp = {
							"app":			obj.app,
							"role":			obj.role,
							"device":		obj.device,
							"scopes":		obj.scopes,
							"expiry":		obj.expiry,
							"tokenId":		obj._id,
							"description":	obj.description
						};

						if (typeof(obj.bitid) != "undefined") {
							if (typeof(obj.bitid.auth) != "undefined") {
								tmp.users =	obj.bitid.auth.users;
							};
						};
						
						return tmp;
					});

					deferred.resolve(result);

					return deferred.promise;
				},

				retrieve: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						"token": 	result.token,
						"tokenId": 	result._id
					});
					
					return deferred.promise;
				},

				generate: (result) => {
					var deferred  = Q.defer();
					
					deferred.resolve({
						"token": 	result.token,
						"tokenId": 	result._id
					});
					
					return deferred.promise;
				}
			},

			statistics: {
				usage: (result) => {
					var deferred  = Q.defer();

					result = result.map(obj => {
						return {
							'scope': 		obj.scope,
							'email':		obj.email,
							'appId':		obj.appId,
							'serverDate':	obj.serverDate
						};
					});
					
					deferred.resolve(result);
					
					return deferred.promise;
				}
			}
		},

		model: (req, result) => {
			var deferred = Q.defer();

			switch(req.originalUrl) {
				case('*'):
					deferred.resolve(result);
					break;

				case('/apps/add'):
					responder.response.apps.add(result).then(deferred.resolve, deferred.reject);
					break;
				case('/apps/get'):
					responder.response.apps.get(result).then(deferred.resolve, deferred.reject);
					break;
				case('/apps/load'):
					responder.response.apps.load(result).then(deferred.resolve, deferred.reject);
					break;
				case('/apps/list'):
					responder.response.apps.list(result).then(deferred.resolve, deferred.reject);
					break;
				case('/apps/allowaccess'):
					responder.response.apps.allowaccess(result).then(deferred.resolve, deferred.reject);
					break;

				case('/token/retrieve'):
					responder.response.token.retrieve(result).then(deferred.resolve, deferred.reject);
					break;

				case('/scopes/add'):
					responder.response.scopes.add(result).then(deferred.resolve, deferred.reject);
					break;
				case('/scopes/get'):
					responder.response.scopes.get(result).then(deferred.resolve, deferred.reject);
					break;
				case('/scopes/list'):
					responder.response.scopes.list(result).then(deferred.resolve, deferred.reject);
					break;
				
				case('/tokens/get'):
					responder.response.tokens.get(result).then(deferred.resolve, deferred.reject);
					break;
				case('/tokens/list'):
					responder.response.tokens.list(result).then(deferred.resolve, deferred.reject);
					break;
				case('/tokens/retrieve'):
					responder.response.tokens.retrieve(result).then(deferred.resolve, deferred.reject);
					break;
				case('/tokens/generate'):
					responder.response.tokens.generate(result).then(deferred.resolve, deferred.reject);
					break;

				case('/auth/auth'):
					responder.response.auth.auth(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/register'):
					responder.response.auth.register(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/validate'):
					responder.response.auth.validate(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/allowaccess'):
					responder.response.auth.allowaccess(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/authenticate'):
					responder.response.auth.authenticate(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/retrievetoken'):
					responder.response.auth.retrievetoken(result).then(deferred.resolve, deferred.reject);
					break;
				case('/auth/resetpassword'):
					responder.response.auth.resetpassword(result).then(deferred.resolve, deferred.reject);
					break;

				case('/users/get'):
					responder.response.users.get(result).then(deferred.resolve, deferred.reject);
					break;
				case('/users/list'):
					responder.response.users.list(result).then(deferred.resolve, deferred.reject);
					break;
				case('/users/alert'):
					responder.response.users.alert(result).then(deferred.resolve, deferred.reject);
					break;
				case('/users/getusers'):
					responder.response.users.getUsers(result).then(deferred.resolve, deferred.reject);
					break;

				case('/statistics/usage'):
					responder.response.statistics.usage(result).then(deferred.resolve, deferred.reject);
					break;

				case('/auth/verify'):
				case('/auth/changeemail'):
				case('/auth/changepassword'):

				case('/apps/update'):
				case('/users/update'):
				case('/scopes/update'):
				
				case('/apps/share'):
				case('/tokens/share'):

				case('/apps/unsubscribe'):
				case('/tokens/unsubscribe'):

				case('/apps/updatesubscriber'):
				case('/tokens/updatesubscriber'):
					responder.response.update(result).then(deferred.resolve, deferred.reject);
					break;

				case('/apps/delete'):
				case('/users/delete'):
				case('/tokens/revoke'):
				case('/scopes/delete'):
					responder.response.delete(result).then(deferred.resolve, deferred.reject);
					break;

				default:
					deferred.resolve({
						'success': {
							'details': 'your request resolved successfully but this payload is not modeled'
						}
					});
			};

			return deferred.promise;
		},

		error: (req, res, err) => {
			if (typeof(err) != "undefined") {
				if (typeof(err) == 'object') {
					try {
						__logger.error(JSON.stringify(err));
					} catch(e) {
						__logger.error('Skipped writing an Error. Could not stringify the err object');
					};
				} else {
					__logger.error(err);	
				};
				res.status(err.error.code).json(err.error);
			} else {
				res.status(responder.errorObject.error.code).json(responder.errorObject.error);
			};
		},

		success: (req, res, result) => {
			responder.model(req, result)
			.then(result => {
				if (typeof(result[0]) !== 'undefined') {
					if (typeof(result[0].error) !== 'undefined') {
						if (result[0].error == 'No records found') {
							responder.errorObject.error.code 	= 401;
							responder.errorObject.error.message = 'No records found';
						};

						responder.error(req, res, responder.errorObject);
						
						return;
					};
				};
				res.json(result);
			}, err => {
				responder.errorObject.error.code 	= 401;
				responder.errorObject.error.message = err;
				responder.error(req, res, responder.errorObject);
			});
		}
	};

	return responder;
};

exports.module = module;