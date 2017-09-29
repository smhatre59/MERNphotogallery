var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/photos";

exports.getphotos = function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("photos").findOne({}, function(err, result) {
      if (err) {
        res.send(err);
      }
      else{
        res.send(result)
      }
      db.close();
    });
  });
};
