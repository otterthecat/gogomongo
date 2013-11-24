var mongo = require('mongodb');
var client = mongo.MongoClient;
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


exports.saveToCollection = function(doc, coll, callback){

    collection = connection.collection(coll);
    collection.save(doc, function(err, result){

        callback(err, result);
    });
};