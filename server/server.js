const express = require("express");
const bodyParser = require("body-parser"); //parse incoming request bodies, req.body
const app = express();
const mongoose = require("mongoose");
const cors = require("cors"); //middleware to anable access from initial request
let Student = require("./student.model"); //mongoDB model

const port = 3010;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/student", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get("/hello", (req, res) => {
  res.send("hello!");
});

app.post("/add", (req, res) => {
  let student = new Student(req.body);
  console.log(student);
  student
    .save()
    .then(student => {
      res.status(200).json({ student: "student added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new student failed");
    });
});

app.get("/students", (req, res) => {
  Student.find()
    .then(students => {
      res.json(students);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("Server running on " + port);
});
