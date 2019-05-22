const JWT = require("jsonwebtoken");
const users = require("../models/users");
const student = require("../models/Student");
const faculty = require("../models/Faculty");
const admin = require("../models/Admin");
const secrete = require("../config/secrete");

JWToken = (user, UserType) => {
  return JWT.sign(
    {
      iss: "Demo",
      sub: { userId: user._id, Type: UserType ? user.Type : "Guest" },
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1)
    },
    secrete.JWT_SECRET
  );
};
module.exports = {
  signUp: async (req, res, next) => {
    const newUser = new users(req.body);
    const user = await users.findOne({ Type: "SuperAdmin" });
    if (newUser.Type === "SuperAdmin" && user)
      return res.json({ msg: "SuperAdmin is already registered" });
    else {
      const user1 = await users.find().count();
      if (user1 === 0) newUser.Type = "SuperAdmin";
      await newUser
        .save()
        .then(st => {
          return res.json({
            msg: "success",
            token: JWToken(newUser),
            _id: newUser._id
          });
        })
        .catch(err => {
          return res.json({ msg: "email already exist" });
        });
    }
  },
  signIn: async (req, res, next) => {
    var email = req.body.email;
    var UserType;
    const user = await users.findOne({ email });
    if (user.Type === "SuperAdmin") UserType = "SuperAdmin";
    if (user.Type === "admin") UserType = await admin.findOne({ Id: user._id });
    if (user.Type === "faculty")
      UserType = await faculty.findOne({ Id: user._id });
    if (user.Type === "student")
      UserType = await student.findOne({ Id: user._id });
    return res.json({
      msg: "success",
      token: JWToken(user, UserType),
      user: {
        name: user.name,
        _id: user._id,
        image: user.image,
        contact: user.contact,
        address: user.address,
        type: UserType ? user.Type : "guest",
        userDetail: UserType
      }
    });
  },
  getList: async (req, res, next) => {
    const items = [];
    req.user.friends.map(friend => {
      items.push(friend.email);
    });
    items.push(req.user.email);
    const userArray = await users.find(
      { email: { $nin: items } },
      { _id: -1, email: 1, name: 1, address: 1, contact: 1, image: 1 }
    );
    res.send(userArray);
  },
  getfriendList: async (req, res, next) => {
    const items = [];
    req.user.friends.map(friend => {
      items.push(friend.email);
    });
    const userArray = await users.find(
      { email: { $in: items } },
      { _id: -1, email: 1, name: 1, address: 1, contact: 1, image: 1 }
    );
    res.send(userArray);
  },
  getSelect: async (req, res, next) => {
    await users
      .find({ name: { $regex: req.body.name } })
      .then(user => res.send(user))
      .catch(err => {
        throw err;
      });
  },
  sendRequest: async (req, res, next) => {
    try {
      var user = await users.findOne({ _id: req.body._id });
      await user.notification.push({
        profileId: req.user.email,
        name: req.user.name,
        notificationType: "request"
      });
      const getnotification = user.notification.filter(
        obj => obj.profileId === req.user.email
      );
      if (getnotification.length === 1)
        var user = await users.findOneAndUpdate(
          { _id: req.body._id },
          { $set: { notification: user.notification } }
        );
      res.send({ msg: " request succssesfully sent" });
    } catch (err) {
      throw err;
    }
  },
  responceRequest: async (req, res, next) => {
    try {
      friend = await users.find({ email: req.body.email });
      const acceptNot = req.user.notification.filter(
        obj => obj.profileId === req.body.email
      );
      await users.findOneAndUpdate(
        { _id: req.user._id },
        {
          $pull: {
            notification: {
              profileId: req.body.email,
              name: req.body.name
            }
          }
        }
      );
      if (acceptNot[0].notificationType === "request") {
        var user = await users.findOne({ email: req.body.email });
        await user.notification.push({
          profileId: req.user.email,
          name: req.user.name,
          notificationType: "accepted"
        });
        const getnotification = user.notification.filter(
          obj => obj.profileId === req.user.email
        );
        if (getnotification.length === 1)
          var user = await users.findOneAndUpdate(
            { email: req.body.email },
            {
              $set: { notification: user.notification }
            }
          );
        await users.findOneAndUpdate(
          { _id: req.user._id },
          {
            $push: {
              friends: { email: friend[0].email }
            }
          }
        );
        await users.findOneAndUpdate(
          { email: req.body.email },
          {
            $push: {
              friends: { email: req.user.email }
            }
          }
        );
      }
      res.send({ msg: " request succssesfully responded" });
    } catch (err) {
      throw err;
    }
  },
  editProfie: async (req, res, next) => {
    await users.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          image: req.file ? req.file.path : req.user.image,
          name: req.body.name ? req.body.name : req.user.name,
          contact: req.body.contact ? req.body.contact : req.user.contact,
          address: req.body.address ? req.body.address : req.user.address
        }
      }
    );
    const user = await users.find({ _id: req.user._id });
    res.send(user);
  },
  userDetails: async (req, res, done) => {
    var email = req.user.email;
    const user = await users.findOne({ email });
    return res.json({
      msg: "success",
      token: JWToken(user),
      user: {
        email: user.email,
        name: user.name,
        _id: user._id,
        image: user.image,
        contact: user.contact,
        address: user.address,
        notification: user.notification
      }
    });
  },
  getNotVerifiedAdmin: async (req, res, done) => {
    await users
      .find({
        $and: [{ Type: "admin" }, { Verified: "false" }]
      })
      .then(adm => {
        console.log(adm);
        res.send(adm);
      });
  },
  getNotVerifiedFaculty: async (req, res, done) => {
    var NVFaculty = await users
      .find({ $and: [{ Type: "faculty" }, , { Verified: "false" }] })
      .then(fac => {
        res.send(fac);
      });
  },
  getNotVerifiedStudent: async (req, res, done) => {
    var NVStudent = await users
      .find({ $and: [{ Type: "student" }, { Verified: "false" }] })
      .then(stu => {
        res.send(stu);
      });
  }
};
