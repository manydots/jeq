
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
 
``` 

## Details
```
view code at './src/utils/Tools.js'
```

## Updating
```
updating from now
```

### 1.1.1
`Basics Use`

### 1.0.4
```javascript
new function[strGetPhoneNumber,isPhoneNumber,stringToObject,isLocal,getUrlParam]
``` 