// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();


// mock objects
// /////////////////////////////////////////////////////////
var EE = require('events').EventEmitter;
var mockObj = function(){ this.name = "mock"};

// modules to test
// /////////////////////////////////////////////////////////
var relay = require('../../lib/Relay');

describe('Relay', function(){

    it("should inhert from EventEmitter", function(){

        relay.should.be.instanceOf(EE);
    });


    describe("#create()", function(){

        var O = relay.create();

        it("should take passed object and have it inherit Relay", function(){

            O.should.be.instanceOf(Function);
        });
    });

    describe("#register()", function(){

        relay.register('newReg', function(){console.log('test');});
        it("add new namespaced event with function", function(){

            relay.relays['newReg'].should.be.ok;
        });
    });

    describe("#run()", function(){

        it("should loop through relays and trigger event on each object", function(){

            relay.run('mocha:test');
        });
    });
});