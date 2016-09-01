var mongoClient=require("mongodb").MongoClient;
var url ="mongodb://127.0.0.1:27017/mytable";
function findData(next){
    mongoClient.connect(url,function(err,db){
        db.collection("users").find().toArray(function(err,dos){
            next(dos);
            db.close();
        })
    })
}
module.exports={
    findData:findData
}
