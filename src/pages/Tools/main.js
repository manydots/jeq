import {Tools,isPhoneNumber} from '../../../bin/main.js';
var str = '快件正在配送途中，请您准备签收（配送员：热热，电话：12757179008）谢谢！投诉15755559798';
let inerStr = {};
inerStr = Tools.strGetPhoneNumber(str,['<b>','</b>'])
console.log(inerStr)
//console.log(Tools.isPhoneNumber('15755559798'));
document.getElementById('container').innerHTML = inerStr.str;