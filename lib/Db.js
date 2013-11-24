var mongo        = require('mongodb');
var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var client       = mongo.MongoClient;
var connection,collection;

exports.makeConnection = function(path, callback){

    client.connect(path, function(err, db){

        connection = db;
        callback(err, db);
    });
};

exports.getConnection = function(callback){

    if(!callback){

        return connection;
    } else if(typeof callback === 'function'){


        return callback(connection);
    } else {

        return false;
    }
};


exports.getCollections = function(callback){

    return connection.collectionNames(callback);
};


exports.use = function(name, callback){

    if(arguments.length === 1){

        collection = connection.collection(name);
        return collection;
    } else if (typeof callback === 'function'){

        connection.collection(name, callback);
    } else {

        return false;
    }
};

exports.save = function(doc, callback){

    collection.save(doc, function(err, result){

        callback(err, result);
    });
};