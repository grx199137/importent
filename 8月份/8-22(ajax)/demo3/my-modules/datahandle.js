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
            next();
            db.close();
        })
    })
}

module.exports = {
    findData:findData,
    insertData:insertData
}