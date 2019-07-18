
# JavaScript Utils
[npmjs jeq](https://www.npmjs.com/package/jeq)

## Install
```shell
npm install jeq
```

## Start
```javascript
 
 import {strGetPhoneNumber,isPhoneNumber,isLocal,getUrlParam,...} from 'jeq';
 or
 import Tools from 'jeq';
 
 let inerStr = {};
 const str = '快件正在配送途中，请您准备签收（配送员：热热，电话：12757179008）谢谢！投诉15755559798';

 inerStr = strGetPhoneNumber(str,['<b>','</b>']);
 inerStr = strGetPhoneNumber(str);

 or 
 inerStr = Tools.strGetPhoneNumber(str,['<b>','</b>']);
 inerStr = Tools.strGetPhoneNumber(str);

 //console.log(inerStr);
 {
 	phoneNumberList: ["15755559798"],
 	str: "快件正在配送途中，请您准备签收（配送员：热热，电话：12757179008）谢谢！投诉<b>15755559798</b>"
 }
 
 let ns = Tools.nameSpace('common');
 console.log(ns('nameA'));

 console.log(Tools.uA());//navigator.userAgent
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
 console.log(Tools.arrarKeySort('age',testArray,true));

 //const IsURLs = 'this is a text ,but it contains http://www.taobao.com u r so butiful';//some problem
 //const IsURLs = 'http://www.taobao.com'; //is ok
 const IsURLs = '营销的短信 http://www.taobao.com 道森股份个'; //is ok
 console.log(Tools.IsURL(IsURLs));


``` 

## Details
```

view code at './src/utils/Tools.js';

npm install

npm run start  

Project is running at http://127.0.0.1:8088/

```

## Updating
```
updating from now
```

### 1.1.2
```javascript
new function[nameSpace,formatDate,uA,seq,formatNum,arrarKeySort,IsURL]
``` 

### 1.1.1
`Basics Use`

### 1.0.4
```javascript
new function[strGetPhoneNumber,isPhoneNumber,stringToObject,isLocal,getUrlParam]
``` 