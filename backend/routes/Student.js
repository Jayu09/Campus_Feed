const router = require("express").Router();
const passport = require("passport");
require("../passport");
const JWTStrategy = passport.authenticate("jwt", { session: false });
const studentControllers = require("../controllers/StudentControllers");
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

router.post("/addStudent", JWTStrategy, studentControllers.addStudent);
router.post("/deleteStudent", JWTStrategy, studentControllers.deleteStudent);
router.put(
  "/editStudent",
  upload.single("image"),
  JWTStrategy,
  studentControllers.editProfie
);
router.put(
  "/documentSubmit",
  upload.single("image"),
  JWTStrategy,
  studentControllers.addDocument
);
module.exports = router;
