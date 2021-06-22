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

    const db = client.db(dbFile);

        db.collection("pets").insertOne({
          _id: id,
          //dont need this bc mongo does it on its own
          name: "Biscuit",
          animal: "hamster",
        }, (error, result) => {
             if(error){
                  return console.log("unable to add entry")
             }
             console.log(result.ops)
        });
      }
    )

    //insertOne is asynchronous so add callback for insertions- this is an example of the READ in CRUD



///CRUD read operation 

