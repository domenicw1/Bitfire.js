// EXAMPLE CODE
var bitfire = require("bitfire");
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
	nf = "https://discordapp.com/api/v6/invites/" + genrnd(3) +"?with_counts=true";
	return nf;
}

// BEGIN BRUTE
bitfire.proxyBrute(function(){return "http://bit.ly/" + bitfire.rndStr(bitfire.lowerCaseChars,6)},proxys,30,function(error,response,body,code){
 // console.log(error,response,body,code)
 try{
 if(response.statusCode == 200){
	 console.log("Found Invite: " + code)
 }
 }catch{}
})
