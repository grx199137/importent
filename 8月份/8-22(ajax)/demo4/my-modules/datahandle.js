var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
function findData(next){
    mongoClient.connect(url,function (err,db) {
        db.collection("students").find().toArray(function (err,dos) {
            next(dos);
            db.close();
        })
    })
}
function insertData(options,next){
    mongoClient.connect(url,function (err,db) {
        db.collection("students").insertOne(options,function () {
            db.close();
            findData(function (data) {
                next(data);
            })
        })
    })
}
function removeData(options,next){
    mongoClient.connect(url,function (err,db) {
        db.collection("students").removeOne(options,function () {
            findData(function (data) {
                next(data);
            })
            db.close();
        })
    })
}
function mailData(options,next){
    mongoClient.connect(url,function (err,db) {
        var condition = {"username":options.username}
        db.collection("students").find(condition).toArray(function (err,dos) {
            db.close();


        })
    })
}

module.exports = {
    findData:findData,
    insertData:insertData,
    removeData:removeData
}