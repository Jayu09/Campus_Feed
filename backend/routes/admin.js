const router = require("express").Router();
const passport = require("passport");
require("../passport");
const { validateUser, schemas } = require("../helpers/schemaHelpers");
const passAuth = passport.authenticate("local", { session: false });
const JWTStrategy = passport.authenticate("jwt", { session: false });
const adminControllers = require("../controllers/AdminController");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: function(req, file, done) {
    done(null, "./postImages");
  },
  filename: function(req, file, done) {
    done(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({
  storage: Storage,
  limits: {
    fileSize: 1024 * 1024 * 6
  }
});

router.post("/addAdmin", JWTStrategy, adminControllers.addAdmin);

module.exports = router;
