# Bitfire.js
Simple Proxy Bruteforcer for Node.js allowing you to perform any api attack (by specifying a function) using proxy lists to bypass any ratelimits.

This repo is empty. Contents will be added soon

# Usage
```js
function generateCode(){
var nf = "http://example.org/api/giftcodes/check/" + getRandomCode();
return nf;
}
var proxyArray = ["123.293.192:8000","942.323.234.122:8080"];
bitfire.proxyBrute(generateCode(),proxyArray,10,function(code,result){
console.log(code + " | " + result.status)
})
```
