// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();


// mock objects
// /////////////////////////////////////////////////////////
var mockDocument = {
    'color': 'blue',
    'stuff': ['1', '3', '5']
}

var mockMixin = {
    'color': 'red',
    'drink': 'water'
}

var EventEmitter = require('events').EventEmitter;

// modules to test
// /////////////////////////////////////////////////////////
var Document = require('../../lib/Document');

describe('Document', function(){

    var myDoc;

    beforeEach(function(){

        myDoc = new Document();
    });

    it("should extend EventEmitter", function(){

        myDoc.should.be.an.instanceOf(EventEmitter);
    });

    describe("#constructor", function(){

        it("should have a .document property", function(){

            myDoc.document.should.be.an('object');

            describe(".document", function(){

                it("should be a POJO if no argument is passed", function(){

                    myDoc.document.should.deep.equal({});
                });

                it("should otherwise equal the object passed", function(){

                    var otherDoc = new Document(mockDocument);
                    otherDoc.document.should.deep.equal(mockDocument);
                });
            });
        });
    });

    describe("#update", function(){

        it("should update document property with passed argument properties", function(){

            myDoc.update(mockMixin).color.should.equal('red');
            myDoc.document.drink.should.equal('water');
        });
    });

    describe("#save", function(){

        it("should save current document to database", function(done){

            // Placeholder test/method until db drive is utilized
            var myDoc = new Document(mockDocument);
            myDoc.save(function(result){

                result.should.equal(true);
                done();
            });
        });
    });
});