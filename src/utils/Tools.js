//var http = require('http');

var Tools = {
	config: {

	},
	https: function() {
		console.log('this is a https tset');
	},
	Promise: function(resolve, reject) {
		return new Promise(function(resolve, reject) {

		})
	},
	strGetPhoneNumber: function(str, insertKey) {
		let reg = /(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}/g;
		let Lists = str.match(reg);
		if (Lists && Lists.length > 0) {
			Lists.map((item, index) => {
				if (insertKey && insertKey.length == 2) {
					let regs = new RegExp(item, "g");
					str = str.replace(regs, insertKey[0] + item + insertKey[1]);
				}
			})
		};
		return {
			phoneNumberList: Lists ? Lists : [],
			str: str
		};
	},
	isPhoneNumber:function(str){
		let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g;
		return reg.test(str*1); 
	},
	stringToObject: function(data) {
		var results = null,
			index = 0;
		if (data && data != '' && data != '""') {
			results = data;
		} else {
			return;
		}
		while (typeof results === 'string') {
			index++;
			if (results.indexOf('{') > -1 && results.lastIndexOf('}') > -1) {
				results = JSON.parse(results);
			} else {
				break;
			}
		};
		return results;
	},
	isLocal() {
		var host = window.location.host;
		return host.indexOf('127.0.0.1') > -1 || host.indexOf('localhost') > -1 || host.indexOf('192.168.1.15') > -1;
	},
	getUrlParam: function(name) {
		name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.href);
		return results == null ? "" : decodeURIComponent(results[1]);
	}
};
//module.exports = Tools;
export default Tools;
export {
	Tools
};

export const isLocal = Tools.isLocal.bind(Tools);
export const https = Tools.https.bind(Tools);
export const Promise = Tools.Promise.bind(Tools);
export const strGetPhoneNumber = Tools.strGetPhoneNumber.bind(Tools);
export const isPhoneNumber = Tools.isPhoneNumber.bind(Tools);
export const stringToObject = Tools.stringToObject.bind(Tools);