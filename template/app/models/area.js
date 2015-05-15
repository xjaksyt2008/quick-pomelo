'use strict';

module.exports = function(app){
    var mdbgoose = app.memdb.goose;

    var AreaSchema = new mdbgoose.Schema({
        _id : {type : String},
        name : {type : String},
    }, {collection : 'areas'});

    mdbgoose.model('Area', AreaSchema);
};

