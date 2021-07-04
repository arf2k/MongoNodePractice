const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.listen(port, () => {
  console.log(`you're connected to port ${port}`);
});

app.post("/users", (req, res) => {
     console.log(req.body)
     res.send("testing")
})

