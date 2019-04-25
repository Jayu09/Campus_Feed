const router = require("express").Router();
const passport = require("passport");
require("../passport");
const JWTStrategy = passport.authenticate("jwt", { session: false });
const eventControllers = require("../controllers/eventControllers");
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

router.post(
  "/addEvent",
  JWTStrategy,
  upload.single("image"),
  eventControllers.createEvent
);
router.get("/getEvent", JWTStrategy, eventControllers.getEvent);

router.put("/approveEvent", JWTStrategy, eventControllers.approveEvent);
module.exports = router;
