import {Tools,isPhoneNumber} from '../../../bin/main.js';
var str = '快件正在配送途中，15755559798,请您准备签收（配送员：热热，电话：12757179008）谢谢';
var str1 = '快件正在配送途中，请您准备签收（配送员：热热，电话：1234）谢谢';
console.log(Tools.strGetPhoneNumber(str,['<b>','</b>']))
console.log(Tools.isPhoneNumber('15755559798'));
document.getElementById('container').innerHTML = isPhoneNumber('15755559797');