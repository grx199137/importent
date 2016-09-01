var mongoclient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
mongoclient.connect(url,function(err,db){
    var col=db.collection("students")
    col.find().toArray(function(err,document){
        console.log(document);
        db.close();
    })
    var student1 ={
        "name":"haha",
        "age":15
    }
    var student2 ={
        "name":"xixi",
        "age":13
    }
    // col.insertMany([student1,student2],function(){
    //     db.close();
    // })
    var check={
        "name":"xixi"
    }
    // col.updateOne(check,{$set:{"age":26}},function(){
    //     db.close();
    // })
})
