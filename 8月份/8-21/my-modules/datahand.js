var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
function insertData(options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").insertOne(options,function(){
            next();
            db.close();
        })
    })
}
function removeData(options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").removeOne(options,function(){
            next();
            db.close();
        })
    })
}
function findData(next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").find().toArray(function(err,dos){
            next(dos);
            db.close();
        })
    })
}
function updateData(condition,options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").updateOne(condition,options,function(){
            next();
            db.close();
        })
    })
}

module.exports = {
    insertData:insertData,
    removeData:removeData,
    findData:findData,
    updateData:updateData
}
