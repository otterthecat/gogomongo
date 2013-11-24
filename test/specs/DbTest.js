// assertion library
// /////////////////////////////////////////////////////////
var chai = require('chai').should();


// mock objects
// /////////////////////////////////////////////////////////
var _dbURL = 'mongodb://otter:otter@localhost/test';
var _doc = {'mocha': 'testing with chai'};

// modules to test
// /////////////////////////////////////////////////////////
var Db = require('../../lib/Db');

describe('Db', function(){


    describe("#makeConnection()", function(done){

        it("should return a connection object", function(done){

            Db.makeConnection(_dbURL, function(err, db){

                db.should.be.an('object');
                done();
            });
        });
    });

    describe("#getConnection()", function(){

        it("should return current connection object if no callback is passed", function(){

            Db.getConnection().should.be.an('object');
        });

        it("should pass current connection to callback if callback is defined", function(done){

            Db.getConnection(function(conn){

                conn.should.be.an('object');
                done();
            });
        });

        it("should return false if callback is not a function", function(){

            Db.getConnection('test').should.equal(false);
        });
    });

    describe("#saveToCollection()", function(){

        it("should save a document to specified collection", function(done){

            Db.saveToCollection(_doc, 'mocha', function(err, result){

                result.should.be.an('object');
                done();
            });
        });
    });
});