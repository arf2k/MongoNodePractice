const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/sample-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});



// const me = new User({
//   name: "    Xan   ",
//   email: "MYEMAIL@XAN.COM  "
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => console.log("Error!", error));
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
