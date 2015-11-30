var customError = require("./error.js");

var Television = function() {
};

// will pass in Error object here
Television.prototype.turnOn = function(callback) {
    // Faulty plug socket
    var value = Math.random();
    if (value < 0.25) {
        // The socket is faulty
        callback(new customError.TvError());
        return;
    }
    else if (value < 0.5) {
        // The power switch is broken
        callback(new customError.TvError());
        return;
    }
    // The TV turned on fine
};

Television.prototype.switchChannel = function(callback) {
    var value = Math.random();
    if (value < 0.25) {
        // The remote has been lost
        callback(new customError.enviromentError());
        return;
    }
    // The channel has been changes
};

Television.prototype.watch = function(callback) {
    var value = Math.random();
    if (value < 0.75) {
        // There is no reception
        callback(new customError.enviromentError());
        return;
    }
    // You are happily watching TV
};

Television.prototype.insertFork = function() {
    console.log('FizzBuzz...');
};

Television.prototype.sharpBlowToTheTop = function() {
    console.log('You lousy piece of junk, I\'m going to hit you so hard...');
};

Television.prototype.hotwirePowerSwitch = function() {
    console.log('Fzzzzztttt...Pop');
};

Television.prototype.searchForRemote = function() {
    console.log('I\'m sure I left it somewhere around here...');
};

Television.prototype.wiggleAerial = function() {
    console.log('It sure is slippy up on this roof...');
};

Television.prototype.throwPotatoChip = function() {
    console.log('Go long...');
};

module.exports = Television;

