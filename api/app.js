const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const fs=require("fs")

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors({ origin: "*", credentials: true }));

const db = require("./models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Route Imports
const user = require("./routes/userRoute");
const participant = require('./routes/participantRoute');
const { sport } = require("./models");

app.use("/api/v1", user);
app.use("/api/v1", participant);

app.use
app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("/api/v1", (req, res) => {
//       res.status(200).json({
//         success: true,
//         data: 'Hello world!',
//       });
// });
app.get('/api/v1/fetchSports/:sport', (req, res) => {
  const sportsName=req.params.sport;
  res.header("Content-Type",'application/json');
  fs.readFile('./resources/sports.json', 'utf8', function (err, data) {
    if (err) res.status(500).send();
    obj = JSON.parse(data);
    const sportDetail=obj.filter((sport)=>sport.SportName==sportsName)
    console.log("🚀 ~ file: app.js:56 ~ sportDetail", sportDetail);
    if(sportDetail)
    res.status(200).json(sportDetail[0]);
    else 
    res.status(200).send("");


  });
 
})
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
