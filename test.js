const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//connect db

mongoose.connect("mongodb://localhost/pcat-test-db");

//create schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

//create photo

// Photo.create({
//   title: "Photo Title 2",
//   description: "Photo Description 2 lorem ipsum",
// });

//read

// Photo.find({}, (err, data) => {
//   console.log(data);
// });

//update photo

// const id = "622d14436bb93fddfbf74b00";

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: "Photo Title 111 updated",
//     description: "Photo Description 111 updated",
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete photo
const id = "622d156c55967afc9e0bc87d";
Photo.findByIdAndDelete(id, (err, data) => {
  console.log("Photo is deleted");
});
