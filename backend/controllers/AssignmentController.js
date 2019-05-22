const assignment = require("../models/Assignment");
const Submission = require("../models/Submission");
const student = require("../models/Student");
module.exports = {
  AssignNew: async (req, res, done) => {
    var Assignment = new assignment(req.body);
    Assignment.FacultyId = req.user._id;
    if (req.user.Type === "faculty")
      await Assignment.save()
        .then(res.send({ msg: "Your Assignment Added Successfully" }))
        .catch({ msg: "Fill All required field" });
    else res.send({ msg: "Not Authorized to Assign New Assignment" });
  },
  Submit: async (req, res, done) => {
    var Assignment = await assignment
      .find({
        AssignmentId: req.body.AssignmentId,
        DateOfSubmission: { $gte: Date.now }
      })
      .catch(err => {
        res.send({ err });
      });
    if (Assignment) {
      var SubmitAssignment = new Submission(req.body);
      SubmitAssignment.Submited_by = req.user._id;
      await SubmitAssignment.save()
        .then(res.send({ msg: "Your Assignment Submited Successfully" }))
        .catch(
          res.send({ msg: "Please Fill All require Field and try again" })
        );
    }
  },
  getAssignment: async (req, res, done) => {
    var Student = new student({ Id: req.user._id });
    await assignment
      .find({ CourseId: Student.CourseId, Sem: Student.Sem })
      .then(assignment => res.send(assignment))
      .catch({ err: "Did not have any assignment" });
  },
  Remark: async (req, res, done) => {
    await Submission.findOneAndUpdate(
      { _id: req.body._id },
      { $set: { remark: req.body.remark, Score: req.body.Score } }
    ).catch(res.send({ err: "Submission Time Is Over" }));
  }
};
