const router = require("express").Router();
const passport = require("passport");
require("../passport");
const { validateUser, schemas } = require("../helpers/schemaHelpers");
const passAuth = passport.authenticate("local", { session: false });
const JWTStrategy = passport.authenticate("jwt", { session: false });
const studentControllers = require("../controllers/StudentControllers");

router.post("/addStudent", JWTStrategy, studentControllers.addStudent);

module.exports = router;
