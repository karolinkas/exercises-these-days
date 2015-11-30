var tv = require("./tv.js");

var firstTv = new tv();

firstTv.turnOn(function(err){
	if(err){
		handleError();
		firstTv.turnOn();
		return;
	}
});

