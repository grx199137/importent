var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/mytable";
function compare(options,next) {
    mongoClient.connect(url,function(err,db){
        var condition = {"username":options.username}
        db.collection("users").find(condition).toArray(function(err,dos){
            db.close();
            if(dos.length==0){
                next(0);
            }else if(dos[0].password==options.password){
                next(1);
            }else{
                next(2);
            }
        })
    })
}

module.exports = {
    compare : compare
}

