const multer = require("multer");
const router = require("express").Router();
const UserImage = require("../models/userimage");

var upload = multer({ dest: "uploads/" });

router.post("/uploadsingle", upload.single("image"), (req, res) => {
  if (req.file) {
    console.log("I got the file");
  } else {
    res.status(400).send("Please choose a file");
  }
  try {
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400);
    console.log(err);
  }
  const myImage = new UserImage({
    img: req.file.filename,
  });

  myImage
    .save()
    .then(() => console.log("Image saved!"))
    .catch((err) => "Error: happended during database upload" + err);
});

router.get("/", (req, res) => {
  UserImage.find()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
