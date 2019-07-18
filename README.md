
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
  
 const str = '快件正在配送途中，请您准备签收（配送员：热热，电话：12757179008）谢谢！投诉15755559798';

 strGetPhoneNumber(str,['<b>','</b>']);

 or Tools.strGetPhoneNumber(str,['<b>','</b>']);

``` 

## Details
```
view code at './src/utils/Tools.js'
```

### 1.0.4
@mo.chen

``` 
new function[strGetPhoneNumber,isPhoneNumber,stringToObject,isLocal,getUrlParam]
``` 