//CRUD Actions

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbFile = "MongoPractice";

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Can't connect to db");
    }
    console.log("Connected!!!!");
  }
);
