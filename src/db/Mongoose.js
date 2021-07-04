const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/sample-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number
  
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid")
      }
    }
  }
});

const me = new User({
  name: "    Xan   ",
  email: "MYEMAIL@XAN.COM  "
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => console.log("Error!", error));
//returns promise

// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task = new Task({
//   description: "Buy gooseberries",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
