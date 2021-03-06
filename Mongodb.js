//CRUD Actions

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbFile = "MongoPractice";

// MongoClient.connect(
//   connectionUrl,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Can't connect to db");
//     }

//     const db = client.db(dbFile);

//     db.collection("pets").insertOne({
//       // _id: id,
//       //dont need this bc mongo does it on its own
//       name: "Biscuit",
//       animal: "hamster",
//     }, (error, result) => {
//          if(error){
//               return console.log("unable to add entry")
//          }
//          console.log(result.ops)
//     });
//   }
// )

//insertOne is asynchronous so add callback for insertions- this is an example of the READ in CRUD

//CRUD READ operation

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Can't connect to db");
    }
    const db = client.db(dbFile);

    // db.collection("pets").findOne({name: "Miss Maeby"}, (error, pet) => {
    //   if(error) {
    //     return console.log("unable to retrieve")
    //   }
    //   console.log(pet)
    // })

    //     db.collection("pets")
    //       .find({ animal: "cat" })
    //       .toArray((error, pets) => {
    //         console.log(pets);
    //       });
    //   }
    // );

    //UPDATING using promises (instead of callbacks)

  //  db.collection("pets").updateOne(
  //     {
  //       _id: new mongodb.ObjectID("60d223cb154e36c5e7aa0429"),
  //     },
  //     {
  //       $set: {
  //         name: "Wilson",
  //       },
  //     }
  //   );
    // updatePromise
    //   .then((result) => {
    //     console.log(result);
    //     //interested in modified count or matched count
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
//   }
// );

//DELETE

    db.collection("pets")
      .deleteMany({
        animal: "cat",
      })
      // .then((result) => {
      //   console.log(result);
      // })
      // .catch((error) => {
      //   console.log(error);
      // })
    }
)