// Bitfire
var request = require('request');
var readline = require('readline');
var fs = require('fs');
module.exports.lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"
module.exports.upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
module.exports.mixedCaseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
module.exports.charsNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
module.exports.lowCharsNum = "abcdefghijklmnopqrstuvwxyz1234567890"
module.exports.upCharsNum = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

module.exports.rndStr = function(e,n){
	   var result = '';
	   
    for (var i = 0; i < n; i++) {
        result += e.charAt(Math.floor(Math.random() * e.length));
    }

    return result;
	
}
module.exports.proxyBrute = function(generateCode,proxyArray,interval,callback){
	var _i = 0;
	
	setInterval(function(){
		_i += 1;
		_i = _i % proxyArray.length;
		var code = generateCode();
		request.defaults({proxy: 'http://' + proxyArray[_i], strictSSL :false}).get(code,function(error, response, body){
			callback(error,response,body,code);
		})
	},interval)
	
}

