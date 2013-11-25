// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();


// mock objects
// /////////////////////////////////////////////////////////
var EE = require('events').EventEmitter;
var mockObj = function(){ this.name = "mock"};

// modules to test
// /////////////////////////////////////////////////////////
var Relay = require('../../lib/Relay');

describe('Relay', function(){

    var relay = new Relay();

    it("should inhert from EventEmitter", function(){

        relay.should.be.instanceOf(EE);
    });


    describe("#extend()", function(){

        relay.extend(mockObj);

        it("should take passed object and have it inherit Relay", function(){

            var mo = new mockObj();
            mo.should.be.instanceOf(Relay);
        });
    });

    describe("#addRelay()", function(){

        var mo = new mockObj();
        relay.addRelay(mo);
        it("should add passed object to internal relays array", function(){

            relay.relays.should.include(mo);
        });
    });

    describe("#run()", function(){

        it("should loop through relays and trigger event on each object", function(){

            relay.run('mocha:test');
        });
    });
});