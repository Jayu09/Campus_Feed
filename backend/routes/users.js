const router = require("express").Router();
const passport = require("passport");
require("../passport");
const { validateUser, schemas } = require("../helpers/schemaHelpers");
const passAuth = passport.authenticate("local", { session: false });
const JWTStrategy = passport.authenticate("jwt", { session: false });
const userController = require("../controllers/userControllers");

router.post(
  "/register",
  validateUser(schemas.userSchema),
  userController.signUp
);

router.post(
  "/authentication",
  validateUser(schemas.authSchema),
  passAuth,
  userController.signIn
);
router.get(
  "/getAdminToVerify",
  JWTStrategy,
  userController.getNotVerifiedAdmin
);
router.get(
  "/getFacultyToVerify",
  JWTStrategy,
  userController.getNotVerifiedFaculty
);
router.get(
  "/getStudentToVerify",
  JWTStrategy,
  userController.getNotVerifiedStudent
);

module.exports = router;
