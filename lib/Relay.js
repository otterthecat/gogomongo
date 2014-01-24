var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Relay = function(){};
util.inherits(Relay, EventEmitter);

Relay.prototype.relays = {};


Relay.prototype.create = function(){

    var func = function(){};

    util.inherits(func, Relay);
    return func;
};


Relay.prototype.register = function(ev, fn){

    if(!this.relays[ev]){
        this.relays[ev] = [];
    }

    this.relays[ev].push(fn);
};


Relay.prototype.run = function(ev, data){

    if(this.relays[ev]){

        this.relays[ev].forEach(function(val, idx, array){

            val(data);
        });
    }
};

module.exports = new Relay();