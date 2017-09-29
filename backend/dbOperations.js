var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/photos";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.createCollection("photos", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = ;
//   db.collection("photos").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
//
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("photos").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
