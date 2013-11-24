var EventEmitter = require('events').EventEmitter;
var util         = require('util');


var Document = function(obj){

    var doc = {};
    if(typeof obj === 'object'){

        doc = obj;
    }

    this.document = doc;
    EventEmitter.call(this);
};

util.inherits(Document, EventEmitter);

Document.prototype.update = function(obj){

    for(var item in obj){

        this.document[item] = obj[item];
    }

    return this.document;
};

Document.prototype.save = function(callback){

    // stubbing until until full database connection implemented
    callback(true);
};


module.exports = Document;