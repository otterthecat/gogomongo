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

    describe("#getCollections()", function(){

        it("should return an array of all collections", function(done){

            Db.getCollections(function(error, array){

                array.should.be.a('array');
                done();
            });
        });
    });


    describe("#use()", function(){

        it("should return requested collection if no callback is passed", function(){

            Db.use('mocha').should.be.an('object');
        });


        it("should pass error/collection to callback function", function(done){

            Db.use('mocha', function(error, collection){

                collection.should.be.an('object');
                done();
            });
        });

        it("should return false if passed callback is not a function", function(){

            Db.use('mocha', 'string').should.equal(false);
        });
    });


    describe("#save()", function(){

        it("should be chained after #use(), save passed document and return error/result", function(done){

            Db.use('mocha').save(_doc, function(error, result){

                result.should.be.an('object');
                done();
            });
        });
    });
});