const express = require("express");
require("./db/Mongoose");
const Pet = require("./models/pets");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.listen(port, () => {
  console.log(`you're connected to port ${port}`);
});

app.post("/pets", (req, res) => {
  const pet = new Pet(req.body);
  pet
    .save()
    .then(() => {
      res.send(pet);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});




const User = require("./models/user");
const Task = require("./models/tasks");

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

//  app.get("/users", (req, res) => {
//    User.find({}).then(users) => {
//      res.send(users)
//    }).catch((e) => {

//    })
//  })

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});


