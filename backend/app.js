const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const post = require("./routes/post");
const users = require("./routes/users");
const admin = require("./routes/admin");
const students = require("./routes/Student");
const faculty = require("./routes/faculty");
const events = require("./routes/event");
const db = require("./config/keys").URI;
const app = express();
const cors = require("cors");
//database connectivity
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .catch(err => {
    throw err;
  });
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
//app configuration
app.use(cors());
app.options("*", cors());
app.use(allowCrossDomain);
app.use("/images/postImages", express.static("postImages"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secrete",
    resave: true,
    saveUninitialized: true
  })
);
//app.use(morgan("dev"));
app.use(passport.initialize());
app.use(passport.session());
// handle routes
app.use("/api/posts", post);
app.use("/api/users", users);
app.use("/api/users/admin", admin);
app.use("/api/users/students", students);
app.use("/api/users/faculty", faculty);
app.use("/api/event", events);
//port declaration
const Port = process.env.PORT || 3010;
app.listen(Port);
