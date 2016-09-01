var mongoClient=require("mongodb").MongoClient;
var url ="mongodb://127.0.0.1:27017/myku";

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

function updateData(conditons,options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").updateOne(conditons,options,function(){
            next();
            db.close();
        })
    })
}

function findData(options,next){
    mongoClient.connect(url,function(err,db){
        db.collection("students").insertOne(options,function(){
            next();
            db.close();
        })
    })
}


