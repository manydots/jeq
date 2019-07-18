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
	isPhoneNumber: function(str) {
		let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/g;
		return reg.test(str * 1);
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
	},
	isObject: function(obj) {
		return this._type(obj) == 'object';
	},
	_type: function(obj) {
		var class2type = {};
		var toString = class2type.toString;
		return obj == null ? String(obj) :
			class2type[toString.call(obj)] || 'object';
	},
	nameSpace: function(name) {
		return function(v) {
			return name + '-' + v;
		};
	},
	formatDate: function(date, fmt) {
		// eslint-disable-next-line
		if (this.isObject(date) == false) {
			return date;
		}
		date = new Date(date);
		//console.log('date：' + date);
		if (fmt === undefined) {
			fmt = 'yyyy-MM-dd hh:mm:ss';
		}
		var o = {
			'M+': date.getMonth() + 1, //月份
			'd+': date.getDate(), //日
			'h+': date.getHours(), //小时
			'm+': date.getMinutes(), //分
			's+': date.getSeconds(), //秒
			'q+': Math.floor((date.getMonth() + 3) / 3), //季度
			'S': date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		for (var k in o)
			// eslint-disable-next-line
			if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
		return fmt;
	},
	uA: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		var infos = {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/Mobile/i), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == "qq", //是否QQ
			language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		};
		return {
			mobile: infos.mobile,
			language: infos.language
		}
	},
	seq: function(length) {
		var lengthNumber = '1';
		if (length == 0) {
			return 0;
		} else if (!length) {
			length = 6;
		};
		for (var i = 0; i < length; i++) {
			lengthNumber += '0';
		}
		return Math.ceil(Math.random() * lengthNumber);
	},
	insertAtCursor: function(myField, myValue) {
		//IE support
		if (document.selection) {
			myField.focus();
			sel = document.selection.createRange();
			sel.text = myValue;
			//sel.select();
			myField.focus();
		}
		//MOZILLA/NETSCAPE support 
		else if (myField.selectionStart || myField.selectionStart == '0') {
			var startPos = myField.selectionStart;
			var endPos = myField.selectionEnd;
			// save scrollTop before insert www.keleyi.com
			var restoreTop = myField.scrollTop;
			myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
			/* if (restoreTop > 0) {
			     myField.scrollTop = restoreTop;
			 }*/
			myField.focus();
			myField.selectionStart = startPos + myValue.length;
			myField.selectionEnd = startPos + myValue.length;
			myField.scrollTop = restoreTop;
		} else {
			myField.value += myValue;
			myField.focus();
		}

		return myField.value
	},
	formatNum: function(num, toFixed, key) {
		//每隔三位小数用[key]逗号，隔开
		key = key ? key : ',';
		if (!num || num == '' || num == '0' || num == 0) {
			return 0;
		}
		if (!toFixed) {
			toFixed = 0;
		}
		var result = '',
			floatNum = '';
		if (num.toString().indexOf('.') > 0) {
			num = num.toFixed(toFixed);
		}
		var nums = num.toString().split('.')[0];
		if (num.toString().split('.')[1]) {
			floatNum = '.' + num.toString().split('.')[1];
		};
		while (nums.length > 3) {
			result = key + nums.slice(-3) + result;
			nums = nums.slice(0, nums.length - 3);
		}
		if (nums) {
			result = nums + result + floatNum;
		}
		return result;
	},
	arrarKeySort: function(key, array, boolean) {
		//array组key排序 boolean[true]降序
		let i = 0,
			len = array.length,
			j, arr;
		if (key && typeof key === 'string' && array) {
			for (i = 0; i < len; i++) {
				for (j = 0; j < len; j++) {
					if (boolean) {
						if (array[i][key] > array[j][key]) {
							arr = array[j];
							array[j] = array[i];
							array[i] = arr;
						}
					} else {
						if (array[i][key] < array[j][key]) {
							arr = array[j];
							array[j] = array[i];
							array[i] = arr;
						}
					}

				}
			}
		}
		return array;
	},
	IsURL: function(strUrl) {
		var strRegex = "((https|http|ftp|rtsp|mms)?://)" +
			"?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
			+
			"(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
			+
			"|" // 允许IP和DOMAIN（域名）
			+
			"([0-9a-z_!~*'()-]+\.)*" // 域名- www. 
			+
			"([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
			+
			"[a-z]{2,6})" // first level domain- .com or .museum 
			+
			"(:[0-9]{1,4})?" // 端口- :80 
			+
			"((/?)|" // a slash isn't required if there is no file name 
			+
			"(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)";
		var re = new RegExp(strRegex);
		//re.test()
		if (re.test(strUrl)) {
			//console.log(re.test(strUrl))
			if (strUrl.match(re)) {
				var urlMap = strUrl.match(re)[0];
				//console.log(strUrl.match(re))
				//console.log(urlMap,strUrl,strUrl.indexOf(urlMap)-1,strUrl.indexOf(urlMap)+urlMap.length+1)
				var mbURL = strUrl.slice(strUrl.indexOf(urlMap) > 0 ? strUrl.indexOf(urlMap) - 1 : strUrl.indexOf(urlMap), strUrl.indexOf(urlMap) + urlMap.length + 1);
				var regs = /^\s{1}((.|\n)*\S)?\s{1}$/;
				var flag = regs.test(mbURL);
				return {
					isContainUrl: true,
					isContainSpace: flag,
					isMatchUrl: mbURL,
					isMatch: urlMap
				};
			}


		} else {
			return {
				isContainUrl: false
			};
		}
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
export const nameSpace = Tools.nameSpace.bind(Tools);
export const formatDate = Tools.formatDate.bind(Tools);
export const uA = Tools.uA.bind(Tools);
export const seq = Tools.seq.bind(Tools);
export const formatNum = Tools.formatNum.bind(Tools);
export const arrarKeySort = Tools.arrarKeySort.bind(Tools);
export const IsURL = Tools.IsURL.bind(Tools);

