import Tools from 'utils/Tools';

var str = '快件正在配送途中，请您准备签收（配送员：热热，电话：12757179008）谢谢！投诉15755559798';
let inerStr = {};
inerStr = Tools.strGetPhoneNumber(null,['<b>','</b>']);
console.log(inerStr);
//console.log(Tools.isPhoneNumber('15755559798'));
let ns = Tools.nameSpace('common');
console.log(ns('nameA'));

console.log(Tools.uA());

console.log(Tools.formatDate(new Date(),'yyyy-MM-dd'))

console.log(Tools.seq(5));
console.log(Tools.formatNum(51454.1345,2,','));

const testArray = [{
	id: 1,
	age: 18,
	name: 'any'
}, {
	id: 3,
	age: 26,
	name: 'mimiy'
}, {
	id: 2,
	age: 65,
	name: 'jhon'
}];


console.log(Tools.arrarKeySort('age',testArray));

// const IsURLs = 'this is a text ,but it contains http://www.taobao.com u r so butiful';//some problem
//const IsURLs = 'http://www.taobao.com'; 
const IsURLs = '营销的短信 http://www.taobao.com 道森股份个'; //is ok
console.log(Tools.IsURL(IsURLs));

document.getElementById('container').innerHTML = inerStr.str;
document.getElementById('container').innerHTML = IsURLs;