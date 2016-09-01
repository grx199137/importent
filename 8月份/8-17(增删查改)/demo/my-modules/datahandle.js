var mongoClient=require("mongodb").MongoClient
var url = "mongodb://127.0.0.1:27017/mytest";

function insertData(options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("teacthers").insertOne(options,function(){
            next();
            db.close();
        })
    })
}

function removeData(options,next) {
    mongoClient.connect(url,function(err,db){
        db.collection("teacthers").removeOne(options,function(){
            next();
            db.close();
        })
    })
}

function updateData(conditions,options,next) {
    mongoClient.connect(url,function(err,db){
        db.collection("teacthers").updateOne(conditions,options,function(){
            next();
            db.close();
        })
    })
}

function findData(next) {
    mongoClient.connect(url,function(err,db){
        db.collection("teacthers").find().toArray(function(err,dos){
            next(dos);
            db.close();
        })
    })
}

module.exports={
    insertData:insertData,
    removeData:removeData,
    updateData:updateData,
    findData:findData
}