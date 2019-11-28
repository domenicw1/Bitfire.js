var bitfire = require("../../bitfire.js");
var readline = require('readline');
var fs = require('fs');

// Read proxy.txt
var filename = "proxy.txt";
var proxys = [];
readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
}).on('line', function(line) {
    proxys.push(line)
});

// Do the actual Bruteforcing
bitfire.proxyBrute(function(){return "http://bit.ly/" + bitfire.rndStr(bitfire.lowerCaseChars,6)},proxys,30,function(error,response,body,code){
 try{
 if(response.statusCode == 200){
	 console.log("Found Invite: " + code)
 }
 }catch{}
})
