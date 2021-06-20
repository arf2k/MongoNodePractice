//CRUD Actions

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbFile = "MongoPractice";

//Create DB entry
MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Can't connect to db");
    }

    const db = client.db(dbFile);

    //     db.collection("pets").insertOne({
    //       name: "Miss Maeby",
    //       animal: "cat",
    //     }, (error, result) => {
    //          if(error){
    //               return console.log("unable to add entry")
    //          }
    //          console.log(result.ops)
    //     });
    //   }
    // )

    //insertOne is asynchronous so add callback for insertions- this is an example of the READ in CRUD

    db.collection("pets").insertMany(
      [
        { name: "Toast", animal: "dog" },
        {
          name: "Kayla",
          animal: "cat",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to add entries to db");
        }
        console.log(result.ops);
      }
    );
  }
);
