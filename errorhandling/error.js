function TvError(){
	this.putForkInSocket = function(){
		console.log("Fork in socket in dangerous! Ja?");
	}
	this.name = "TvError";
	this.stack = (new Error()).stack;

	this.hotWire = function(){
		console.log("Ouch hot!");
	}
}

function EnviromentError(){
	this.searchSofa = function(){
		console.log("Searching in each corner of sofa.");
	}

	this.climbRoof = function(){
		console.log("Climbing roof (using a rope,eh?).");
	}
	this.stack = (new Error()).stack;


}

function enviromentError(){

}

TvError.prototype = Object.create(Error.prototype);
EnviromentError.prototype = Object.create(Error.prototype);

TvError.prototype.constructor = TvError;
EnviromentError.prototype.constructor = EnviromentError;

exports.TvError = TvError;
exports.EnviromentError = EnviromentError;
