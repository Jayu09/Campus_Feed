const post = require("../models/post");
const student = require("../models/Student");
const faculty = require("../models/Faculty");
const admin = require("../models/Admin");

module.exports = {
  getPost: async (req, res, done) => {
    // var ValidUser;
    // if(req.user.Type==='admin')
    //   ValidUser = await admin.find({Id:req.user._id})
    // else if (req.user.Type === 'student')
    //   ValidUser = await student.find({ Id: req.user._id })
    // else if (req.user.Type === 'faculty')
    //   ValidUser = await faculty.find({ Id: req.user._id })
    await post
      .find()
      .or([
        { $and: [{ privacy: "private" }, { profileId: req.user.email }] },
        { $and: [{ privacy: "public" }] }
      ])
      .sort({ date: -1 })
      .then(post => res.send(post))
      .catch(err => {
        throw err;
      });
  },
  addPost: async (req, res, done) => {
    const newPost = new post(req.body);
    try {
      newPost.profileId = req.user.email;
      newPost.authorImage = req.user.image;
      newPost.authorName = req.user.name;
      if (req.file) newPost.image = req.file.path;
      await newPost.save();
      res.send(newPost);
    } catch (err) {
      throw err;
    }
  },
  likePost: async (req, res, done) => {
    try {
      var postres = await post.findOne({ _id: req.body.payload });
      await postres.like.push({ _id: req.user._id, name: req.user.name });
      const getlike = postres.like.filter(obj => obj.name === req.user.name);
      if (getlike.length === 1)
        var postres = await post.findOneAndUpdate(
          { _id: req.body.payload },
          { $set: { like: postres.like } }
        );
    } catch (err) {
      throw err;
    }
  },
  completePost: async (req, res, done) => {
    try {
      var postres = await post.findOne({ _id: req.body.payload });
      await postres.completed.push({
        _id: req.user._id,
        name: req.user.name
      });
      const getcompleted = postres.completed.filter(
        obj => obj.name === req.user.name
      );
      if (getcompleted.length === 1)
        await post.findOneAndUpdate(
          { _id: req.body.payload },
          { $set: { completed: postres.completed } }
        );
    } catch (err) {
      throw err;
    }
  },
  deletePost: async (req, res, done) => {
    try {
      var post = await findOne({ _id: req.body.payload });
      var POST = new post();
      if (
        req.user.Type === "Admin" ||
        req.user.Type === "SuperAdmin" ||
        req.user.email === post.profileId
      )
        POST.remove({ _id: post._id })
          .then(rmv => res.send({ msg: "Post successfully deleted" }))
          .catch(err => res.send({ msg: err }));
    } catch (err) {
      throw err;
    }
  }
};
