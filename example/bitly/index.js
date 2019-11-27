// EXAMPLE CODE
var bitfire = require("../../bitfire.js");
var readline = require('readline');
var fs = require('fs');

let possibleChars = "abcdefghijklmnopqrstuvwxyz";
var filename = "proxy.txt";
var proxys = [];
readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
}).on('line', function(line) {
    proxys.push(line)
});
function genrnd(n) {
    var result = '';
    for (var i = 0; i < n; i++) {
        result += possibleChars.charAt(Math.floor(Math.random() * 26));
    }
	if(result != ""){
    return result;
	}else{
		return generateCode();
	}
}
function generateCode(){
	nf = "http://bit.ly/" + genrnd(4);
	return nf;
}

// BEGIN BRUTE
bitfire.proxyBrute(generateCode,proxys,50,function(error,response,body,code){
 // console.log(error,response,body,code)
 try{
 if(!body.includes("404 Not Found") && !body.includes("potentially problematic") && !body.includes("This is a 404 error")){
	 console.log("Found Code: " + code)
	// process.exit(0);
 }
 }catch{}
})