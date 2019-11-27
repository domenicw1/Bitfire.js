// Bitfire
var request = require('request');
var readline = require('readline');
var fs = require('fs');

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

