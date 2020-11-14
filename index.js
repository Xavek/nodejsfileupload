const express = require("express");
const uploadRouter = require("./uploadroutes/uploadroute");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const dbURI = process.env.DB_URI;
//App init
const app = express();
app.use(cors());

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/uploads"));
app.use("/", uploadRouter);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected sucessfully"))
  .catch((err) => console.log(err));

//PORT TO LISTEN
const PORT = process.env.PORT || 5000;
//app Listen
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
