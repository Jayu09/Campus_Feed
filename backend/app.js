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
const db = require("./config/keys").URI;
const app = express();
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
//app configuration
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
app.use("/posts", post);
app.use("/users", users);
app.use("/users/admin", admin);
app.use("/users/students", students);
app.use("/users/faculty", faculty);
//port declaration
const Port = process.env.PORT || 3010;
app.listen(Port);
