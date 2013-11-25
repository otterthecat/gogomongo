var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Relay = function(){

    this.relays.push(this);
};


util.inherits(Relay, EventEmitter);

Relay.prototype.extend = function(obj){

    util.inherits(obj, Relay);
};

Relay.prototype.relays = [];

Relay.prototype.addRelay = function(obj){

    this.relays.push(obj);
};

Relay.prototype.run = function(ev, data){

    for(var i = 0; i < this.relays.length; i += 1){

        this.relays[i].emit(ev, data);
    };
};


module.exports = Relay;